const path = require("node:path");

const actionToken = process.env.ACTION_TOKEN;
const bundlePath = process.env.ATTEST_BUNDLE_PATH;

if (!actionToken || !bundlePath) {
  throw new Error("Missing action runtime input");
}

// @actions/github resolves the target repository from this environment
// variable. The runner prevents a workflow-level override, so set it in the
// same process immediately before loading the pinned action bundle.
process.env.GITHUB_REPOSITORY =
  "mickeyjoes-h1/h1-attest-boundary-b-20260723";

const inputs = {
  "SUBJECT-PATH": "",
  "SUBJECT-NAME": "h1-attestation-foreign-control",
  "SUBJECT-DIGEST":
    "sha256:2222222222222222222222222222222222222222222222222222222222222222",
  "SUBJECT-CHECKSUMS": "",
  "SBOM-PATH": "",
  "PREDICATE-TYPE": "",
  PREDICATE: "",
  "PREDICATE-PATH": "",
  "PUSH-TO-REGISTRY": "false",
  "CREATE-STORAGE-RECORD": "true",
  "SUBJECT-VERSION": "",
  "SHOW-SUMMARY": "false",
  "GITHUB-TOKEN": actionToken,
  "PRIVATE-SIGNING": "false",
};

for (const [name, value] of Object.entries(inputs)) {
  process.env[`INPUT_${name}`] = value;
}

require(path.resolve(bundlePath));
