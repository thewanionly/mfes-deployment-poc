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
COPY apps/customers/package.json apps/customers/package.json
COPY packages/ui/package.json packages/ui/package.json
COPY packages/eslint-config/package.json packages/eslint-config/package.json
COPY packages/typescript-config/package.json packages/typescript-config/package.json
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/customers/node_modules ./apps/customers/node_modules
COPY --from=deps /app/packages/ui/node_modules ./packages/ui/node_modules
COPY --from=deps ${PNPM_STORE_PATH} ${PNPM_STORE_PATH}
ENV PATH="/app/node_modules/.bin:/app/apps/customers/node_modules/.bin:${PATH}"
RUN pnpm --filter customers... build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3004
ENV PATH="/app/node_modules/.bin:/app/apps/customers/node_modules/.bin:${PATH}"
WORKDIR /app/apps/customers

COPY --from=builder /app/apps/customers/.next ./.next
COPY --from=builder /app/apps/customers/public ./public
COPY --from=builder /app/apps/customers/package.json ./package.json
COPY --from=builder /app/apps/customers/next.config.js ./next.config.js
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/apps/customers/node_modules ./node_modules
COPY --from=builder /app/packages/ui /app/packages/ui
COPY --from=builder /app/packages/ui/node_modules ./packages/ui/node_modules
COPY --from=builder ${PNPM_STORE_PATH} ${PNPM_STORE_PATH}

EXPOSE 3004

CMD ["pnpm", "start"]
