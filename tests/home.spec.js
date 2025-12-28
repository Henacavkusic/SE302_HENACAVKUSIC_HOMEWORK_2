import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test.describe('sweet shop tests', () => {

  test('tc01 homepage load', async ({ page }) => {
    await this.page.goto('https://sweetshop.netlify.app')
    await expect(page).toHaveURL(/sweetshop/)
  })

  test('tc03 valid search', async ({ page }) => {
    const home = new HomePage(page)
    await home.open()
    await home.search('cake')
    await expect(page.locator('body')).toContainText('cake')
  })

  test('tc04 invalid search', async ({ page }) => {
    const home = new HomePage(page)
    await home.open()
    await home.search('@@@@')
    await expect(page.locator('body')).toBeVisible()
  })

})
