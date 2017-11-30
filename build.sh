#!/usr/bin/env sh

# Compile the typescript
tsc

# Browserify the result
browserify Decrypt.js -s secret_agent -o bundle.js