# OpenSpec Context Skill

Generate and refine initial OpenSpec context structures for projects.

## Overview

The `openspec-context` skill automates the creation and refinement of OpenSpec specifications for new projects. It extracts requirements from project descriptions, generates initial specification files, and guides users through an iterative refinement cycle.

## Installation

The skill is installed at: `~/.claude/skills/openspec-context/`

## Usage

Invoke the skill with:

```
/openspec-context "Your project description"
```

## What It Does

### Phase 1: Parse & Analyze
- Extracts requirements, assumptions, and constraints
- Identifies user roles, features, and technology stack
- Detects missing information and ambiguities

### Phase 2: Generate Initial Structure
Creates production-ready specification files:
- **agents.md** — Agent behavior guide
- **project.md** — Main project specification
- **assumptions.md** — Tracked assumptions

### Phase 3: Interactive Refinement
- Presents critical assumptions one at a time
- Provides 4 mutually exclusive options per assumption
- Updates specs after each clarification
- Tracks progress with visual indicators

## Generated Files

```
/openspec/specs/
├── agents.md              # Behavior & coding standards
├── project.md             # Main project spec
└── assumptions.md         # Tracked assumptions
```

## Key Features

✅ **Modular generation** — Creates extensible specifications  
✅ **Assumption tracking** — Identifies and categorizes by impact  
✅ **Conflict detection** — Highlights contradictory requirements  
✅ **AI-friendly output** — Specifications for both humans and AI  
✅ **Iterative refinement** — Structured clarification process  
✅ **Production-ready** — Immediately usable specifications  

## Configuration

Edit `skill.json` to customize:
- `maxRefinementCycles`: Maximum number of refinement questions (default: 5)
- `specOutput`: Output directory for generated specifications

## Examples

### Basic Project Description

```
/openspec-context "A mobile healthcare app for scheduling doctor appointments with Zustand state management and Tailwind styling"
```

### Detailed Project Description

```
/openspec-context "Medical appointment management SPA using React 18, TypeScript, Vite, and TanStack Router. 
Features include appointment listing, doctor selection, time slot availability view, 
and appointment cancellation/rescheduling. Uses Zustand for state management 
and localStorage for persistence. No backend required, uses public APIs. 
Must be mobile-responsive and WCAG 2.1 AA compliant."
```

## Assumption Categories

The skill categorizes assumptions into:
- **User Behavior** — Who uses the system and how
- **Data Assumptions** — Data structures and constraints
- **Business Rules** — Logic and workflows
- **Performance** — Load times and scalability
- **Integrations** — External APIs and services
- **Accessibility** — WCAG compliance requirements
- **Security** — Data protection and encryption
- **Technical** — Architecture and frameworks

## Refinement Process

1. User provides project description
2. Skill extracts requirements and assumptions
3. Skill generates initial specifications
4. Skill presents critical assumptions (max 5)
5. User selects one of 4 options per assumption
6. Skill updates specifications based on choices
7. Process repeats until all high-impact assumptions resolved

## Output Files

### agents.md Structure
- General Behavior (core principles, philosophy)
- Code Style (TypeScript, naming conventions)
- UI Guidelines (design system, components)
- Data Handling (state management, API)
- Testing Strategy (unit, component, E2E)
- Scope Control (in/out of scope)

### project.md Structure
- Overview & Purpose
- Application Type & Platform
- Core Features
- Technology Stack
- Architecture & Data Flow
- Testing Strategy
- UI Standards
- Directory Structure
- Development Workflow
- Success Metrics

### assumptions.md Structure
- Tracked Assumptions (by category and impact)
- Missing Information (gaps requiring input)
- Refinement Decisions (choices and impacts)

## Best Practices

1. **Be descriptive** — Provide detailed project descriptions for better extraction
2. **Clarify early** — Address high-impact assumptions first
3. **Review specs** — Check generated specifications for accuracy
4. **Iterate** — Refine specs as project evolves
5. **Keep updated** — Update assumptions.md with refinement decisions

## Troubleshooting

**Issue**: Skill doesn't recognize my project type  
**Solution**: Provide more specific details about technology stack and features

**Issue**: Generated specs are incomplete  
**Solution**: Answer all refinement questions to ensure all assumptions are clarified

**Issue**: Missing important information  
**Solution**: Check assumptions.md for gaps and update project specs accordingly

## Future Enhancements

- Multi-file generation for complex projects
- Feature-specific specification templates
- API integration specification generator
- Performance benchmark templates
- Security checklist generator
- Custom assumption question builder

## Support

For issues or suggestions, refer to the Claude Code documentation or create an issue in the project repository.
