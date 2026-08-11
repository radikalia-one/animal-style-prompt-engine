const fs = require("fs");
const path = require("path");

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

const rawData = fs.readFileSync(animalPath, "utf8");

const animalDNA = JSON.parse(rawData);

const rawStyleData = fs.readFileSync(stylePath, "utf8");

const styleDNA = JSON.parse(rawStyleData);

const rawTransformationData = fs.readFileSync(
  transformationPath,
  "utf8"
);

const transformation = JSON.parse(rawTransformationData);

console.log("Animal Style Prompt Engine");
console.log("--------------------------");

console.log("Species:", animalDNA.species);
console.log("Pose:", animalDNA.pose);
console.log("Expression:", animalDNA.expression);

console.log("\nTier A Signature Features:");

animalDNA.signatureFeatures.tierA.forEach((feature) => {
  console.log("-", feature);
});

console.log("\nStyle Information:");
console.log("Style Name:", styleDNA.name);
console.log("Category:", styleDNA.category);

console.log("\nPrimary Materials:");
console.log("- Body:", styleDNA.materials.primaryShell);
console.log("- Structural Panels:", styleDNA.materials.structuralPanels);
console.log("- Eyes:", styleDNA.materials.eyes);

console.log("\nStyle Priority Order:");

styleDNA.priorityOrder.forEach((priority, index) => {
  console.log(`${index + 1}. ${priority}`);
});

console.log("\nTransformation Information:");

console.log(
  "Target Style:",
  transformation.targetStyle.name
);

console.log(
  "Summary:",
  transformation.summary
);

console.log("\nBody Transformation:");
console.log(
  transformation.shapeTransformations.body
);

console.log("\nEye Transformation:");
console.log(
  transformation.shapeTransformations.eyes
);

console.log("\nMaterial Mapping:");

console.log(
  "- Body:",
  transformation.materialMapping.body
);

console.log(
  "- Eyes:",
  transformation.materialMapping.eyes
);

console.log(
  "- Toe Pads:",
  transformation.materialMapping.toePads
);

console.log("\n=================================");
console.log("GENERATED PROMPT PREVIEW");
console.log("=================================\n");

const promptPreview =
  `Transform a ${animalDNA.species} into an original ` +
  `${styleDNA.name} creature while preserving its ` +
  `${animalDNA.signatureFeatures.tierA.join(", ")}. ` +
  `Use ${styleDNA.materials.primaryShell} for the main body, ` +
  `${styleDNA.materials.structuralPanels} for structural areas, ` +
  `and ${styleDNA.materials.eyes} for the eyes.`;

console.log(promptPreview);