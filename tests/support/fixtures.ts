import { test as bddBase } from 'playwright-bdd';
import { expect } from '@playwright/test';

// Extend from playwright-bdd (required for createBdd).
// Add custom fixtures / POMs inside .extend({...}) when needed.
export const test = bddBase.extend<object>({});
export { expect };
