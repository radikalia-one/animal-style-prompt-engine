const fs = require("fs");
const path = require("path");

function loadJSON(filePath) {
  const rawData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(rawData);
}

const animalPath = path.join(
  __dirname,
  "..",
  "examples",
  "frog-soft-mechanical",
  "animal-dna.json"
);

const stylePath = path.join(
  __dirname,
  "..",
  "prompts",
  "soft-mechanical-designer-toy",
  "style.json"
);

const transformationPath = path.join(
  __dirname,
  "..",
  "examples",
  "frog-soft-mechanical",
  "transformation.json"
);

const animalDNA = loadJSON(animalPath);
const styleDNA = loadJSON(stylePath);
const transformation = loadJSON(transformationPath);

function generatePrompt(animal, style, transformation) {
  const signatureFeatures = animal.signatureFeatures.tierA.join(", ");

  const prompt = `
Use case: stylized concept

Asset type: premium 3D character concept render

Primary request:
Transform a ${animal.species} into an original ${style.name} creature while preserving its unmistakable species identity, ${signatureFeatures}, ${animal.expression.toLowerCase()} expression, and ${animal.pose.toLowerCase()}.

Subject:
A ${animal.species} with its recognizable anatomy rebuilt according to the ${style.name} visual language.

Shape language:
${style.shapeLanguage.primaryForms.join(", ")}.

Body transformation:
${transformation.shapeTransformations.body}.

Eye transformation:
${transformation.shapeTransformations.eyes}.

Materials:
Main body: ${style.materials.primaryShell}.
Structural regions: ${style.materials.structuralPanels}.
Eyes: ${style.materials.eyes}.
Toe pads: ${transformation.materialMapping.toePads}.

Color system:
${style.colorSystem.strategy}.

Pose:
${animal.pose}.

Expression:
${animal.expression}.

Lighting:
${style.lighting.key}, ${style.lighting.fill}, ${style.lighting.rim}.

Rendering:
${style.rendering.style}, ${style.rendering.presentation}.

Constraints:
Preserve species identity.
Preserve all Tier A features.
No extra limbs.
No missing limbs.
No humanoid anatomy.
No generic robot design.
No random accessories.
No text.
No logo.
No watermark.
`;

  return prompt.trim();
}

const finalPrompt = generatePrompt(
  animalDNA,
  styleDNA,
  transformation
);

console.log("\n=================================");
console.log("ANIMAL STYLE PROMPT ENGINE");
console.log("=================================\n");

console.log(finalPrompt);