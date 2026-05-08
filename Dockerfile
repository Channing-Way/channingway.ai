# Build container for channingway.ai CI/CD.
# Base: Minimus-hardened MinimOS Node image (no OS package manager at runtime; npm is available during build for installing wrangler).
# MINIMUS_TENANT_ID is supplied via --build-arg from a secret; not committed in source.
ARG MINIMUS_TENANT_ID
FROM reg.mini.dev/${MINIMUS_TENANT_ID}/node:latest

LABEL org.opencontainers.image.source=https://github.com/Channing-Way/channingway.ai

RUN npm install -g wrangler@latest

WORKDIR /workspace
