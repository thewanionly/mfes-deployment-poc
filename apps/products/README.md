# Products

## Run with Docker

1. Open Docker Desktop

2. From the repo root:

   ```bash
   docker build -f apps/products/Dockerfile -t products-app .
   docker run --rm -p 3001:3001 products-app
   ```

3. The container exposes port 3001 via `pnpm start`. If you need env vars, pass them at run time (e.g., `--env-file apps/products/.env`), then open http://localhost:3001.

## Run locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.
