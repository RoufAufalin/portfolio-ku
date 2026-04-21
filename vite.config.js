import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "node:path"

function getBase() {
  const explicit = process.env.VITE_BASE
  if (explicit) return explicit

  const isVercel = Boolean(process.env.VERCEL)
  if (isVercel) return "/"

  const isGithubActions = process.env.GITHUB_ACTIONS === "true"
  if (!isGithubActions) return "/"

  const repo = process.env.GITHUB_REPOSITORY?.split("/")?.[1]
  if (!repo) return "/"

  return `/${repo}/`
}

export default defineConfig({
  plugins: [react()],
  base: getBase(),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
      },
    },
  },
})
