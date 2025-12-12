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
COPY apps/orders/package.json apps/orders/package.json
COPY packages/ui/package.json packages/ui/package.json
COPY packages/eslint-config/package.json packages/eslint-config/package.json
COPY packages/typescript-config/package.json packages/typescript-config/package.json
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/orders/node_modules ./apps/orders/node_modules
COPY --from=deps /app/packages/ui/node_modules ./packages/ui/node_modules
COPY --from=deps ${PNPM_STORE_PATH} ${PNPM_STORE_PATH}
ENV PATH="/app/node_modules/.bin:/app/apps/orders/node_modules/.bin:${PATH}"
RUN pnpm --filter orders... build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3002
ENV PATH="/app/node_modules/.bin:/app/apps/orders/node_modules/.bin:${PATH}"
WORKDIR /app/apps/orders

COPY --from=builder /app/apps/orders/.next ./.next
COPY --from=builder /app/apps/orders/public ./public
COPY --from=builder /app/apps/orders/package.json ./package.json
COPY --from=builder /app/apps/orders/next.config.js ./next.config.js
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/apps/orders/node_modules ./node_modules
COPY --from=builder /app/packages/ui /app/packages/ui
COPY --from=builder /app/packages/ui/node_modules ./packages/ui/node_modules
COPY --from=builder ${PNPM_STORE_PATH} ${PNPM_STORE_PATH}

EXPOSE 3002

CMD ["pnpm", "start"]
