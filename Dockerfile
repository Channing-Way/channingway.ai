# Build container for channingway.ai CI/CD.
# Base: node:22-slim (Debian-based, glibc, npm available at build).
# Build-time npm dependencies (currently: wrangler for Cloudflare Workers /
# Pages deploys) are declared in package.json + package-lock.json so
# Dependabot's npm ecosystem tracks drift on them AND builds are fully
# deterministic (npm ci installs exactly what the lockfile records).
# Do not embed pinned npm versions in RUN commands; they are unparseable
# by Dependabot (see R-VERSIONING-1).
#
# Runs as the `node` user throughout. WORKDIR is under /home/node so the
# workspace directory inherits node-user ownership; a root-owned WORKDIR
# would cause EACCES when `npm ci` creates node_modules/ under it.
FROM node:26-slim

LABEL org.opencontainers.image.source=https://github.com/Channing-Way/channingway.ai

USER node
WORKDIR /home/node/workspace
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --omit=dev

# Put node_modules/.bin on PATH so wrangler and any future CLI dependency
# are directly invocable by downstream workflows without npx prefixing.
ENV PATH="/home/node/workspace/node_modules/.bin:${PATH}"
