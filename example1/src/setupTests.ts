// add Vitest functions here globally
import "@testing-library/jest-dom/vitest";
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Run cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  cleanup();
});
