export class HomePage {
  constructor(page) {
    this.page = page
    this.searchInput = page.locator('input[type="text"]')
    this.searchButton = page.locator('button')
  }

  async open() {
    await page.goto('https://sweetshop.netlify.app')
    await this.page.waitForLoadState('domcontentloaded')
  }

  async search(text) {
    await this.searchInput.first().waitFor({ state: 'visible' })
    await this.searchInput.first().fill(text)
    await this.searchButton.first().click()
  }
}
