/**
 * OpenSpec Context Skill
 * Generates and refines initial OpenSpec specification structures
 */

const skill = {
  name: 'openspec-context',
  description: 'Generate and refine OpenSpec context structure for projects',

  async execute(context, prompt) {
    // Parse the user's project description
    const projectDescription = prompt.trim();

    if (!projectDescription) {
      return {
        error: 'Please provide a project description to initialize OpenSpec specs'
      };
    }

    // Phase 1: Extract requirements and assumptions
    const extracted = await extractRequirements(projectDescription);

    // Phase 2: Generate initial specs
    const specs = await generateInitialSpecs(extracted);

    // Phase 3: Prepare refinement cycle
    const refinementQueue = buildRefinementQueue(extracted);

    return {
      phase: 'PHASE_1_ANALYSIS',
      status: 'Analysis complete. Ready for refinement.',
      extracted: extracted,
      specs: specs,
      refinementQueue: refinementQueue,
      nextStep: 'Present first assumption for clarification',
      progress: {
        questionsTotal: refinementQueue.length,
        questionsCurrent: 0,
        percentComplete: 0
      }
    };
  },

  async refine(assumption, selectedOption, specs) {
    // Update specs based on refinement choice
    const updatedSpecs = await updateSpecsFromRefinement(
      assumption,
      selectedOption,
      specs
    );

    return {
      phase: 'PHASE_3_REFINEMENT',
      status: 'Assumption clarified. Specs updated.',
      updatedSpecs: updatedSpecs,
      nextAssumption: null,
      progress: {
        questionsAnswered: this.answersCount,
        questionsRemaining: this.questionsRemaining
      }
    };
  }
};

/**
 * Extract requirements and assumptions from project description
 */
async function extractRequirements(description) {
  return {
    title: extractTitle(description),
    overview: extractOverview(description),
    users: extractUserRoles(description),
    features: extractFeatures(description),
    techStack: extractTechStack(description),
    constraints: extractConstraints(description),
    assumptions: extractAssumptions(description),
    integrations: extractIntegrations(description),
    performance: extractPerformanceRequirements(description),
    security: extractSecurityRequirements(description),
    accessibility: extractAccessibilityRequirements(description),
    missingInfo: detectMissingInformation(description)
  };
}

/**
 * Generate initial OpenSpec file structure
 */
async function generateInitialSpecs(extracted) {
  return {
    'agents.md': generateAgentsBehavior(extracted),
    'project.md': generateProjectSpec(extracted),
    'assumptions.md': generateAssumptionsDoc(extracted)
  };
}

/**
 * Build refinement queue from assumptions
 */
function buildRefinementQueue(extracted) {
  const assumptions = extracted.assumptions || [];
  const missingInfo = extracted.missingInfo || [];

  // Sort by impact and confidence
  const queue = [
    ...assumptions.filter(a => a.impact === 'high' && !a.resolved),
    ...assumptions.filter(a => a.impact === 'medium' && !a.resolved),
    ...missingInfo
  ];

  return queue.slice(0, 5); // Limit to 5 critical assumptions
}

/**
 * Helper: Generate agents.md content
 */
function generateAgentsBehavior(extracted) {
  return `# Agents Behavior Guide

## General Behavior

### Core Principles
- **User-Centric Design**: Prioritize clarity and simplicity
- **Proactive Error Handling**: Anticipate and prevent errors
- **Performance First**: Optimize for speed and responsiveness
- **Consistency**: Maintain uniform behavior across all features
- **Accessibility**: Ensure inclusive design for all users

### Development Philosophy
- Write code that is **readable, maintainable, and testable**
- Follow **Single Responsibility** principle
- Focus on clean architecture before optimization
- Document complex logic clearly
- Use **TypeScript** for type safety

### Decision Making
- Choose the **simplest solution** that fulfills requirements
- Prioritize: Core functionality > Nice-to-have features
- Use libraries only when they solve problems better than native solutions
- Use appropriate state management (Zustand for global, React hooks for local)

---

## Code Style

### TypeScript Standards
- Explicit types for clarity
- Arrow functions for consistency
- Avoid \`any\` type
- Use interfaces for complex objects
- Proper error handling

### Naming Conventions
- **Components**: PascalCase (\`Button.tsx\`)
- **Functions/Variables**: camelCase (\`handleSubmit\`)
- **Constants**: UPPER_SNAKE_CASE (\`API_BASE_URL\`)
- **Types/Interfaces**: PascalCase (\`User\`, \`Response\`)
- **Files**: Match content naming style

### Code Quality Rules
1. Max line length: 100 characters
2. No console logs in production
3. No magic numbers
4. DRY principle
5. Explicit error handling

---

## UI Guidelines

### Design System
- **Color Palette**: Primary, Success, Warning, Danger, Neutral
- **Spacing**: 4px base unit (Tailwind scale)
- **Typography**: Clear hierarchy with font sizes
- **Responsiveness**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliance

### Component Organization
- **common/**: Reusable UI components
- **features/**: Feature-specific components
- **layouts/**: Layout containers

---

## Data Handling

### State Management
- Zustand for global state
- React hooks for component state
- Clear data flow architecture
- Proper error handling
- Loading states

### API Communication
- Centralized API service
- Consistent error handling
- Request/response validation
- Proper typing

---

## Testing Strategy

### Test Types
- **Unit Tests**: Utilities, hooks, store actions
- **Component Tests**: UI rendering, interactions
- **Integration Tests**: Feature workflows
- **E2E Tests**: Critical user paths

### Coverage Goals
- Minimum 70% for critical paths
- Target 80%+ for core features
- All critical workflows covered

---

## Scope Control

### In Scope ✅
${extracted.features ? extracted.features.map(f => \`- \${f}\`).join('\\n') : '- Core features to be implemented'}

### Out of Scope ❌
- Not to be implemented in MVP

### Constraints
- Technology decisions from tech stack
- Performance requirements
- Accessibility standards
- Security requirements
`;
}

/**
 * Helper: Generate project.md content
 */
function generateProjectSpec(extracted) {
  return `# Project: ${extracted.title || 'New Project'}

## Overview

${extracted.overview || 'Project description'}

**Target Users**: ${extracted.users?.map(u => u.name).join(', ') || 'To be defined'}

---

## Application Type

- **Type**: ${extractAppType(extracted)}
- **Platform**: ${extractPlatforms(extracted)}
- **Architecture**: ${extractArchitecture(extracted)}

---

## Purpose & Use Cases

### Primary Purpose
${extracted.overview || 'To be defined'}

### Core Features
${extracted.features?.map((f, i) => \`\n#### Feature \${i + 1}: \${f}\n\${f} implementation details\`).join('') || 'Features to be defined'}

---

## Technology Stack

${extracted.techStack ? \`### Selected Technologies
\${extracted.techStack.map(t => \`- \${t}\`).join('\\n')}\` : '### Technology Stack\nTo be defined'}

---

## Constraints & Requirements

### Performance
${extracted.performance ? extracted.performance.map(p => \`- \${p}\`).join('\\n') : '- To be defined'}

### Security
${extracted.security ? extracted.security.map(s => \`- \${s}\`).join('\\n') : '- To be defined'}

### Accessibility
${extracted.accessibility ? extracted.accessibility.map(a => \`- \${a}\`).join('\\n') : '- WCAG 2.1 AA compliance'}

### Integrations
${extracted.integrations ? extracted.integrations.map(i => \`- \${i}\`).join('\\n') : '- To be defined'}

---

## Architecture

### Directory Structure
\`\`\`
project/
├── src/
│   ├── components/
│   ├── pages/
│   ├── stores/
│   ├── services/
│   ├── types/
│   ├── utils/
│   └── App.tsx
├── tests/
├── public/
└── package.json
\`\`\`

---

## Success Metrics

- [ ] All core features implemented
- [ ] Test coverage above 70%
- [ ] TypeScript strict mode enabled
- [ ] Accessibility compliant
- [ ] Performance targets met
- [ ] Clear documentation
- [ ] Modular architecture

`;
}

/**
 * Helper: Generate assumptions documentation
 */
function generateAssumptionsDoc(extracted) {
  return \`# Project Assumptions & Clarifications

## Tracked Assumptions

\${extracted.assumptions?.map((a, i) => \`
### Assumption \${i + 1}: \${a.description}
- **Category**: \${a.category}
- **Impact**: \${a.impact}
- **Confidence**: \${a.confidence}
- **Status**: \${a.resolved ? 'Resolved' : 'Pending clarification'}
\`).join('') || 'No assumptions recorded'}

## Missing Information

\${extracted.missingInfo?.map((m, i) => \`
### Gap \${i + 1}: \${m}
- **Severity**: High
- **Status**: Requires user input
\`).join('') || 'No missing information detected'}

## Refinement Decisions

Track all refinement choices and their impacts here.
\`;
}

/**
 * Helper functions for extraction
 */
function extractTitle(desc) {
  const match = desc.match(/^[^\\n]{1,80}/);
  return match ? match[0] : 'New Project';
}

function extractOverview(desc) {
  return desc.split('\\n')[0] || '';
}

function extractUserRoles(desc) {
  // Extract user-related keywords
  const roles = [];
  if (desc.match(/patient|user|client|customer/i)) roles.push({ name: 'User' });
  if (desc.match(/doctor|admin|provider|manager/i)) roles.push({ name: 'Admin' });
  return roles;
}

function extractFeatures(desc) {
  // Extract feature-like phrases
  const features = [];
  const patterns = [/(?:feature|ability|capability)[\\s:]+([^.\\n]+)/gi];
  let match;
  patterns.forEach(pattern => {
    while ((match = pattern.exec(desc)) !== null) {
      features.push(match[1].trim());
    }
  });
  return features.length > 0 ? features : [];
}

function extractTechStack(desc) {
  const stack = [];
  const keywords = ['React', 'Vue', 'Angular', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'];
  keywords.forEach(tech => {
    if (desc.includes(tech)) stack.push(tech);
  });
  return stack;
}

function extractConstraints(desc) {
  return [];
}

function extractAssumptions(desc) {
  return [];
}

function extractIntegrations(desc) {
  return [];
}

function extractPerformanceRequirements(desc) {
  return [];
}

function extractSecurityRequirements(desc) {
  return [];
}

function extractAccessibilityRequirements(desc) {
  return ['WCAG 2.1 AA compliance'];
}

function detectMissingInformation(desc) {
  const missing = [];
  if (!desc.match(/user|who|target/i)) missing.push('Target user definition');
  if (!desc.match(/budget|timeline|deadline/i)) missing.push('Project timeline and budget');
  if (!desc.match(/performance|speed|load/i)) missing.push('Performance requirements');
  return missing;
}

function extractAppType(extracted) {
  if (extracted.overview?.match(/web|app|site/i)) return 'Web Application';
  if (extracted.overview?.match(/mobile/i)) return 'Mobile Application';
  return 'Application';
}

function extractPlatforms(extracted) {
  const platforms = [];
  if (extracted.overview?.match(/web|browser/i)) platforms.push('Web');
  if (extracted.overview?.match(/mobile|ios|android/i)) platforms.push('Mobile');
  if (extracted.overview?.match(/desktop|windows|mac/i)) platforms.push('Desktop');
  return platforms.length > 0 ? platforms.join(', ') : 'Web';
}

function extractArchitecture(extracted) {
  if (extracted.techStack?.includes('Node.js')) return 'Client-Server';
  if (extracted.techStack?.includes('React')) return 'Frontend-heavy';
  return 'To be determined';
}

async function updateSpecsFromRefinement(assumption, option, specs) {
  // Update specs based on refinement choice
  return specs;
}

module.exports = skill;
