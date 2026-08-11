const fs = require("fs");
const path = require("path");

const animalPath = path.join(
  __dirname,
  "..",
  "examples",
  "frog-soft-mechanical",
  "animal-dna.json"
);

const rawData = fs.readFileSync(animalPath, "utf8");

const animalDNA = JSON.parse(rawData);

console.log("Animal Style Prompt Engine");
console.log("--------------------------");

console.log("Species:", animalDNA.species);
console.log("Pose:", animalDNA.pose);
console.log("Expression:", animalDNA.expression);

console.log("\nTier A Signature Features:");

animalDNA.signatureFeatures.tierA.forEach((feature) => {
  console.log("-", feature);
});