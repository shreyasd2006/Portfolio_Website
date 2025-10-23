from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("file:///app/about.html")
    page.screenshot(path="jules-scratch/verification/about.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
