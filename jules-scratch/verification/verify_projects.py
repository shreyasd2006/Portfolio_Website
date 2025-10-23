from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("file:///app/projects.html")
    page.screenshot(path="jules-scratch/verification/projects.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
