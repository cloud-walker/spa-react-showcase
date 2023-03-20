import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'

const COVERAGE_THRESHOLD = 70

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupVitest.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: true,
      functions: COVERAGE_THRESHOLD,
      branches: COVERAGE_THRESHOLD,
      lines: COVERAGE_THRESHOLD,
      statements: COVERAGE_THRESHOLD,
    },
  },
})
