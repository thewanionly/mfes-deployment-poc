# Products

## Run with Docker

1. Open Docker Desktop

2. From the repo root:

   ```bash
   docker build -f apps/content/Dockerfile -t content-app .
   docker run --rm -p 3002:3002 content-app
   ```

3. The container exposes port 3002 via `pnpm start`. If you need env vars, pass them at run time (e.g., `--env-file apps/content/.env`), then open http://localhost:3002.

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

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.
