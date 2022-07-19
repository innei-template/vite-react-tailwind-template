import { defineConfig } from 'vite'
import Checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    Checker({
      typescript: true,
      enableBuild: true,
    }),
  ],
})
