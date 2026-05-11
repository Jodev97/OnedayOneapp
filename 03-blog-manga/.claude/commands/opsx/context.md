---
name: "OPSX: Context"
description: Generate and refine initial OpenSpec context structure for projects
category: Workflow
tags: [workflow, specifications, planning, experimental]
---

Generate and refine initial OpenSpec context structure for projects.

**Input**: Provide a project description. The skill will extract requirements, assumptions, and guide iterative refinement.

**Steps**

1. **Accept project description**

   If provided, use it. Otherwise:
   - Ask the user to describe their project
   - Request details about features, technology stack, and constraints
   - Clarify scope and requirements

   Always announce: "Generating OpenSpec context for: <project-name>"

2. **Extract and analyze requirements**

   Parse the project description to identify:
   - Requirements and features
   - User roles and behaviors
   - Technology stack
   - Constraints and assumptions
   - Missing information and ambiguities

3. **Generate initial specification files**

   Create three specification artifacts:
   - **agents.md** — Agent behavior guide, coding standards, UI guidelines
   - **project.md** — Main project specification with overview, features, architecture
   - **assumptions.md** — Tracked assumptions by category and impact level

   Store in: `.openspec/specs/`

4. **Present critical assumptions for refinement**

   For each high-impact assumption:
   - Display the assumption clearly
   - Present 4 mutually exclusive options
   - Allow user to select one option
   - Update specifications based on choice
   - Show progress indicator

   Continue until all critical assumptions are resolved (max 5 cycles).

5. **Update specifications iteratively**

   After each user choice:
   - Update the relevant specification files
   - Mark assumption as resolved
   - Show impact of the decision
   - Present next assumption

6. **Show final results**

   Display:
   - Summary of generated specifications
   - Key decisions made
   - Location of generated files
   - Next steps (propose, explore, implement)

**Assumption Categories**

The skill organizes assumptions into:
- **User Behavior** — Who uses the system and how
- **Data Assumptions** — Data structures and constraints
- **Business Rules** — Logic and workflows
- **Performance** — Load times and scalability
- **Integrations** — External APIs and services
- **Accessibility** — WCAG compliance requirements
- **Security** — Data protection and encryption
- **Technical** — Architecture and frameworks

**Output Format**

```
## Generating OpenSpec Context

**Project:** <project-name>
**Status:** Analyzing requirements...

### Phase 1: Requirement Extraction
[Requirements identified]

### Phase 2: Initial Specifications Generated
✓ agents.md
✓ project.md
✓ assumptions.md

### Phase 3: Assumption Refinement
Resolving critical assumptions (3/5):

**Assumption 1/5: [Assumption Title]**
Current decision: Pending clarification

Options:
1. Option A — [description]
2. Option B — [description]
3. Option C — [description]
4. Option D — [description]

Select an option (1-4):
```

**Output On Completion**

```
## OpenSpec Context Generated

**Project:** <project-name>
**Status:** Complete ✓

### Generated Specifications
- ✓ agents.md — Behavior and coding standards
- ✓ project.md — Main project specification
- ✓ assumptions.md — Tracked assumptions and decisions

### Key Decisions Made
- Decision 1: [option selected]
- Decision 2: [option selected]
- Decision 3: [option selected]

### Files Location
Specifications saved to: `.openspec/specs/`

### Next Steps
You can now:
1. Review and refine the specifications
2. Use `/opsx:propose` to create a full change proposal
3. Use `/opsx:explore` to think through implementation details
4. Use `/opsx:apply` to start implementing
```

**Guardrails**

- Always extract requirements before generating specs
- Present assumptions one at a time for clarity
- Ensure all critical assumptions are addressed
- Update specs immediately after each decision
- Keep refinement process focused and iterative
- Validate that generated specs are coherent and complete
- Provide clear rationale for assumption categories
- Guide user toward sensible decisions without bias

**Fluid Workflow Integration**

This skill supports the project planning workflow:

- **Standalone usage**: Generate context before proposing changes
- **Part of workflow**: Use before `openspec-propose` for better change proposals
- **Iterative refinement**: Update context as project evolves
- **Foundation for other skills**: Provides structured input for other OpenSpec operations
