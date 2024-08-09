import { defineConfig } from 'vite';
import { UserWorkspaceConfig } from 'vitest/node';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
} as UserWorkspaceConfig);
