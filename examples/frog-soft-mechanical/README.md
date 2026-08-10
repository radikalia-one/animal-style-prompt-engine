# Frog Soft-Mechanical Example

This example demonstrates the complete transformation workflow used by Animal Style Prompt Engine.

The source subject is a red-eyed tree frog.

The target visual language is the Soft-Mechanical Designer Toy style.

---

## Purpose

This example shows how the system moves from animal analysis to a final image-generation prompt.

The workflow is:

Animal Image
→ Animal DNA
→ Transformation Blueprint
→ Final Prompt

The style rules are provided by:

prompts/soft-mechanical-designer-toy/

---

## Files

### animal-dna.md

Defines the biological and visual characteristics that make the red-eyed tree frog recognizable.

It identifies:

- Species.
- Silhouette.
- Body proportions.
- Head structure.
- Eye characteristics.
- Limb proportions.
- Toe-pad anatomy.
- Natural colors.
- Signature features.
- Pose.
- Expression.
- Identity priorities.

This file answers:

"What must remain recognizable?"

---

### transformation.md

Defines how the frog's biological characteristics are translated into the Soft-Mechanical Designer Toy visual language.

It includes:

- Body transformation.
- Head transformation.
- Eye transformation.
- Limb transformation.
- Toe-pad transformation.
- Surface translation.
- Color translation.
- Material mapping.
- Mechanical detail strategy.
- Proportion rules.
- Composition.
- Lighting.
- Negative rules.

This file answers:

"How should the animal be transformed?"

---

### final-prompt.md

Contains the final image-generation prompt produced from the transformation blueprint.

It includes:

- Primary request.
- Subject description.
- Shape language.
- Proportion treatment.
- Surface treatment.
- Color palette.
- Materials.
- Facial construction.
- Signature feature protection.
- Mechanical construction.
- Composition.
- Lighting.
- Rendering.
- Constraints.
- Negative prompt.

This file answers:

"What should be sent to the image-generation model?"

---

## Style Source

The style package used by this example is located at:

```text
prompts/
└── soft-mechanical-designer-toy/
    ├── analyzer.md
    ├── template.md
    └── negative-prompt.md