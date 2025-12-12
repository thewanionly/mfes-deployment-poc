# syntax=docker/dockerfile:1
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PNPM_STORE_PATH="/pnpm/store"
ENV PATH="${PNPM_HOME}:${PATH}"
RUN corepack enable

WORKDIR /app

FROM base AS deps
# Only copy the manifests needed for dependency resolution to keep layers small.
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json ./
COPY apps/content/package.json apps/content/package.json
COPY packages/ui/package.json packages/ui/package.json
COPY packages/eslint-config/package.json packages/eslint-config/package.json
COPY packages/typescript-config/package.json packages/typescript-config/package.json
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/content/node_modules ./apps/content/node_modules
COPY --from=deps /app/packages/ui/node_modules ./packages/ui/node_modules
COPY --from=deps ${PNPM_STORE_PATH} ${PNPM_STORE_PATH}
ENV PATH="/app/node_modules/.bin:/app/apps/content/node_modules/.bin:${PATH}"
RUN pnpm --filter content... build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3003
ENV PATH="/app/node_modules/.bin:/app/apps/content/node_modules/.bin:${PATH}"
WORKDIR /app/apps/content

COPY --from=builder /app/apps/content/.next ./.next
COPY --from=builder /app/apps/content/public ./public
COPY --from=builder /app/apps/content/package.json ./package.json
COPY --from=builder /app/apps/content/next.config.js ./next.config.js
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/apps/content/node_modules ./node_modules
COPY --from=builder /app/packages/ui /app/packages/ui
COPY --from=builder /app/packages/ui/node_modules ./packages/ui/node_modules
COPY --from=builder ${PNPM_STORE_PATH} ${PNPM_STORE_PATH}

EXPOSE 3003

CMD ["pnpm", "start"]
