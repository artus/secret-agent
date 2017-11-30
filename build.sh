#!/usr/bin/env sh

# Compile the typescript
tsc Decrypt.ts

# Browserify the result
browserify Decrypt.js -s secret_agent -o bundje.js