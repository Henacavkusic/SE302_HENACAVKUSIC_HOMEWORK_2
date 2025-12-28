import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    baseURL: 'https://sweetshop.netlify.app',
    browserName: 'chromium',
    headless: false
  }
})
