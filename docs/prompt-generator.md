# Prompt Generator Specification

## 1. Purpose

The Prompt Generator converts structured transformation data into a clear, professional, reusable image-generation prompt.

Its job is not to analyze the animal or the style.

Those tasks belong to:

- Animal DNA.
- Style DNA.
- Transformation Engine.

The Prompt Generator receives the resulting transformation blueprint and converts it into natural language optimized for image-generation systems.

---

## 2. Inputs

The Prompt Generator may receive:

### Animal DNA

- Species.
- Silhouette.
- Signature features.
- Expression.
- Pose.
- Natural colors.
- Important markings.

### Style DNA

- Shape language.
- Materials.
- Color system.
- Surface treatment.
- Construction logic.
- Lighting.
- Rendering.
- Composition.
- Negative rules.

### Transformation Blueprint

- Features to preserve.
- Shape translations.
- Material mappings.
- Color mappings.
- Surface translations.
- Proportion adjustments.
- Facial rules.
- Construction rules.
- Rendering rules.

### User Instructions

Optional additional instructions provided by the user.

Examples:

- Front view.
- White background.
- More minimal.
- Stronger stylization.
- Preserve original pose.
- Use muted colors.

---

## 3. Main Principle

The prompt must describe the final intended image.

It should not describe the internal reasoning process.

Avoid instructions such as:

"Analyze the animal."

"Determine its anatomy."

"Think about the reference."

Those instructions belong to the analysis stages.

The final prompt should describe only the desired output.

---

## 4. Prompt Structure

The default prompt should follow this order:

1. Use case.
2. Asset type.
3. Primary request.
4. Subject.
5. Species-preservation rules.
6. Shape language.
7. Proportion treatment.
8. Surface translation.
9. Color palette.
10. Materials.
11. Facial construction.
12. Signature anatomical features.
13. Construction details.
14. Composition.
15. Lighting.
16. Rendering.
17. Constraints.

This order may be adjusted for specific image-generation models.

---

## 5. Use Case

The prompt may begin by defining the intended visual result.

Examples:

Use case:
stylized concept

Use case:
premium collectible character design

Use case:
product visualization

Use case:
character design exploration

Use case:
3D designer-toy concept

---

## 6. Asset Type

Define the type of image being requested.

Examples:

- Premium 3D character concept render.
- Collectible toy product visualization.
- Stylized creature design.
- High-end CGI character study.
- Sofubi concept render.
- Mechanical designer-toy render.

This helps establish the visual objective.

---

## 7. Primary Request

The primary request should summarize the transformation in one strong sentence.

Example:

Transform a red-eyed tree frog into an original premium mechanical designer-toy creature while preserving its unmistakable species identity, compact silhouette, protruding red eyes, long limbs, and oversized orange adhesive toe pads.

This sentence should contain:

- Animal.
- Transformation goal.
- Style.
- Identity-preservation requirements.

---

## 8. Subject Description

Describe the animal after transformation.

Example:

A compact red-eyed tree frog in a crouched pose, rebuilt as smooth injection-molded polymer volumes with elongated articulated limbs and oversized rounded toe modules.

Avoid unnecessary biological details already removed by the selected style.

---

## 9. Species-Preservation Rules

Explicitly state the features that must remain recognizable.

Example:

Preserve:

- Compact frog body.
- Large protruding eyes.
- Long slender limbs.
- Adhesive toe-pad proportions.
- Original crouched pose.
- Red, green, blue, yellow, and orange identity colors.

Species preservation should appear early in the prompt.

---

## 10. Shape Language

Translate Style DNA into precise visual instructions.

Avoid:

"nice rounded shapes"

Prefer:

"large compact primary volumes, smooth continuous surfaces, broad edge radii, soft tapered transitions, minimal secondary geometry."

Use measurable or observable visual language whenever possible.

---

## 11. Proportion Treatment

Describe how proportions are stylized.

Examples:

- Slightly enlarge the head.
- Preserve long limbs.
- Compact the torso.
- Enlarge the eyes moderately.
- Keep the horn dominant.
- Preserve the long neck.

Do not apply generic toy proportions when they conflict with species identity.

---

## 12. Surface Translation

Describe how natural surfaces become stylized surfaces.

Examples:

Fur:
translate into smooth sculptural volume with restrained graphic color blocking.

Feathers:
translate into overlapping molded panels.

Scales:
translate into shallow geometric segmentation.

Smooth amphibian skin:
translate into clean satin polymer surfaces.

Exoskeleton:
translate into simplified molded shell sections.

---

## 13. Color Palette

Describe color hierarchy rather than only listing colors.

Example:

Primary shell:
bright leaf green.

Secondary structural regions:
deep charcoal.

Accent colors:
red around the eyes and orange at the toe pads.

Small secondary color zones:
blue and yellow along the sides.

The palette should preserve identity while following Style DNA.

---

## 14. Materials

Use precise material descriptions.

Examples:

- Satin injection-molded polymer.
- Soft-touch charcoal elastomer.
- Glossy smoked-black optical glass.
- Semi-gloss painted resin.
- Dense molded rubber.
- Soft vinyl.
- Matte ceramic glaze.

Avoid vague material language.

---

## 15. Facial Construction

The face should receive explicit instructions.

Describe:

- Eye scale.
- Eye spacing.
- Eye orientation.
- Eye material.
- Muzzle or beak treatment.
- Mouth treatment.
- Expression.

Example:

Build the frog's large protruding eyes as glossy optical lens modules while preserving their spacing, orientation, and bright red identity.

---

## 16. Signature Feature Protection

Important Animal DNA Tier A features should be restated.

Examples:

- Preserve elephant trunk.
- Preserve toucan beak.
- Preserve giraffe neck.
- Preserve beetle horn.
- Preserve frog toe pads.

Repetition is acceptable when protecting identity-critical features.

---

## 17. Construction Details

Describe only the construction details supported by Style DNA.

Examples:

- Clean recessed seams.
- Minimal panel divisions.
- Molded shell transitions.
- Hidden joints.
- Rounded mechanical inserts.
- Layered vinyl masses.

Avoid random greebles.

---

## 18. Composition

Define:

- Camera angle.
- Framing.
- Subject orientation.
- Background.
- Lens feel.
- Amount of empty space.

Example:

Three-quarter front view, full-body product framing, eye-level camera, centered subject, clean warm-gray studio background.

---

## 19. Lighting

Describe the lighting as a visual system.

Example:

Soft overhead-front key light, broad controlled highlights, gentle fill, subtle rim light, soft contact shadows, restrained ambient occlusion.

Avoid only saying:

"cinematic lighting."

Be specific.

---

## 20. Rendering

Describe the expected final presentation.

Examples:

- Premium stylized CGI.
- High-end product visualization.
- Clean ray-traced reflections.
- Controlled depth of field.
- Studio-render quality.
- Sharp silhouette readability.

---

## 21. Constraints

Finish the prompt with explicit restrictions.

Examples:

- Entirely original character.
- Preserve species identity.
- No extra limbs.
- No missing limbs.
- No humanoid anatomy.
- No random accessories.
- No text.
- No logos.
- No watermark.
- Do not reproduce the reference character.

---

## 22. Negative Prompt

The system should generate a separate negative prompt.

Negative prompts should focus on likely failure modes.

Possible categories:

### Anatomy

- Extra limbs.
- Missing limbs.
- Wrong species.
- Deformed anatomy.
- Incorrect wing type.
- Wrong paws.
- Malformed beak.
- Incorrect horn placement.

### Style Drift

- Photorealistic fur.
- Biological pores.
- Real feathers when the style requires molded surfaces.
- Random armor.
- Cyberpunk clutter.
- Excessive mechanical detail.

### Rendering Problems

- Blur.
- Noise.
- Grain.
- Flat lighting.
- Poor perspective.
- Low resolution.
- Distorted eyes.

### Unwanted Content

- Text.
- Logos.
- Watermarks.
- Random accessories.
- Copied character-specific features.

---

## 23. Prompt Density

The Prompt Generator should balance precision and readability.

Too short:

"Make this frog a cool toy."

Too long and repetitive:

Multiple paragraphs repeating the same instructions without adding useful visual information.

Preferred:

A dense but organized professional prompt where every sentence contributes useful visual guidance.

---

## 24. Prompt Specificity

Prefer:

"satin injection-molded polymer"

over:

"plastic"

Prefer:

"broad rounded primary forms with continuous transitions"

over:

"rounded design"

Prefer:

"large protruding optical lenses preserving the frog's natural eye spacing"

over:

"big eyes"

Precision improves repeatability.

---

## 25. Prompt Modularity

The prompt should be built from reusable sections.

Conceptually:

```text
[PRIMARY REQUEST]

[SUBJECT]

[IDENTITY RULES]

[SHAPE LANGUAGE]

[PROPORTIONS]

[SURFACE TRANSLATION]

[COLOR SYSTEM]

[MATERIAL SYSTEM]

[FACE]

[CONSTRUCTION]

[COMPOSITION]

[LIGHTING]

[RENDERING]

[CONSTRAINTS]