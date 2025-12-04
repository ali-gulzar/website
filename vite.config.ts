import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Replace 'repo-name' with your repository name if deploying to https://<user>.github.io/<repo-name>/
  // If deploying to a custom domain or https://<user>.github.io/, set base to '/'
  base: '/website/', 
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
