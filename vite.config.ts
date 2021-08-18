import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import Checker from 'vite-plugin-checker'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    Checker({
      typescript: true,
      // FIXME this is bug
      enableBuild: true,
    }),
  ],
})
