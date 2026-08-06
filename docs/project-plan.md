# Animal Style Prompt Engine — Project Plan

## 1. Project Overview

Animal Style Prompt Engine is an AI-assisted application for creating professional image-generation prompts.

The application will use:

- One or more style reference images.
- One animal reference image.
- User-selected transformation options.

The engine will analyze the artistic language of the style references and generate a reusable prompt that adapts that visual language to the uploaded animal while preserving its recognizable species identity.

---

## 2. Main Problem

Creating a precise prompt from a visual reference is difficult.

A user may recognize a style visually but may not know how to describe:

- Shape language.
- Proportions.
- Materials.
- Color hierarchy.
- Surface treatment.
- Lighting.
- Rendering.
- Simplification rules.
- Anatomy-preservation rules.

The application will help translate these visual qualities into a clear, structured, and reusable prompt.

---

## 3. Target Users

The project is intended for:

- Character designers.
- Toy designers.
- 3D artists.
- Illustrators.
- Prompt engineers.
- Art teachers.
- Students.
- Content creators.
- People without advanced prompt-writing experience.

---

## 4. Core Workflow

The basic application workflow will be:

1. Upload a style reference image.
2. Upload an animal image.
3. Analyze the visual style.
4. Analyze the animal identity.
5. Extract the Style DNA.
6. Extract the Animal DNA.
7. Combine both analyses.
8. Generate a professional prompt.
9. Generate a negative prompt.
10. Copy or export the result.

---

## 5. Style DNA

The Style DNA system will describe reusable visual rules such as:

- Shape language.
- Volume hierarchy.
- Proportion system.
- Color philosophy.
- Material system.
- Surface finish.
- Simplification rules.
- Facial construction.
- Mechanical or sculptural logic.
- Lighting.
- Composition.
- Rendering style.
- Negative rules.

---

## 6. Animal DNA

The Animal DNA system will identify:

- Species.
- Silhouette.
- Body proportions.
- Facial proportions.
- Expression.
- Pose.
- Eye placement.
- Ears, horns, beak, muzzle, or nose.
- Limbs, wings, fins, paws, or claws.
- Tail shape.
- Natural colors.
- Markings.
- Signature features.
- Features that must remain recognizable.

---

## 7. First Version — MVP

MVP means Minimum Viable Product.

The first working version should include:

- A simple web interface.
- One style-reference upload area.
- One animal-image upload area.
- A text field for additional instructions.
- A button to generate a structured prompt.
- A prompt-result area.
- A negative-prompt area.
- A copy button.
- A small library of predefined styles.

The first version does not need to generate the final image.

Its first purpose is to generate excellent prompts.

---

## 8. Initial Style Library

The first styles may include:

- Soft-mechanical designer toy.
- Japanese sofubi collectible.
- Premium stylized CGI.
- Minimal vinyl toy.
- Clay character.
- Low-poly animal.
- Stylized robotic creature.

Each style must have its own rules and reusable prompt template.

---

## 9. Future Features

Possible future versions may include:

- Multiple style-reference images.
- Automatic color-palette extraction.
- Style comparison.
- Prompt history.
- Saved projects.
- User-created style presets.
- Prompt optimization for different image models.
- Direct image generation.
- Side-by-side results.
- Style strength control.
- Species-preservation control.
- Prompt export.
- Multilingual prompts.

---

## 10. Supported Prompt Formats

Future versions may export prompts optimized for:

- GPT Image.
- Midjourney.
- Flux.
- Stable Diffusion.
- Ideogram.
- Adobe Firefly.
- Other compatible image-generation systems.

---

## 11. Development Phases

### Phase 1 — Foundation

- Organize the repository.
- Write the documentation.
- Define the product.
- Define Style DNA.
- Define Animal DNA.
- Create the first manual prompt templates.

### Phase 2 — Basic Interface

- Build the HTML structure.
- Add CSS styling.
- Add image-upload previews.
- Add text inputs.
- Add the result panel.

### Phase 3 — Prompt Engine

- Build the prompt-template system.
- Add style presets.
- Add user variables.
- Generate structured prompts.
- Generate negative prompts.

### Phase 4 — Validation

- Check species identity.
- Check prompt completeness.
- Check style consistency.
- Prevent direct copying.
- Prevent anatomy errors.

### Phase 5 — AI Integration

- Connect an AI model.
- Analyze uploaded references.
- Produce Style DNA automatically.
- Produce Animal DNA automatically.
- Generate the final adaptive prompt.

### Phase 6 — Publication

- Test the application.
- Improve accessibility.
- Write user instructions.
- Publish the project online.

---

## 12. Current Status

The repository has been created.

The initial folders are:

- `assets`
- `docs`
- `examples`
- `prompts`

The project is currently in Phase 1: Foundation.

---

## 13. Project Principle

The application must preserve the identity of the uploaded animal.

The artistic style may change:

- Materials.
- Surface treatment.
- Color organization.
- Construction logic.
- Simplification.
- Rendering.

The application must not unintentionally change:

- Species.
- Signature anatomy.
- Recognizable silhouette.
- Essential facial identity.
- Number of limbs.
- Natural body structure.

---

## 14. Long-Term Vision

The long-term goal is to build a reliable visual prompt-engineering platform that helps users transform reference images into structured design systems.

The project should help users move from:

“I like this style, but I do not know how to describe it.”

to:

“I now have a precise, reusable, professional prompt system.”