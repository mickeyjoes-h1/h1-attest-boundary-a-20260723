# Artifact attestation repository authorization probe

This owned-account probe compares:

- a normal attestation stored in repository A; and
- the same repository A workflow token and OIDC identity with the action's
  target context changed to repository B.

The workflow passes only when the positive control succeeds and the
cross-repository write fails.
