from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Verify index.html
    page.goto(f"file://{os.getcwd()}/index.html")
    page.screenshot(path="jules-scratch/verification/index.png")

    # Verify about.html
    page.goto(f"file://{os.getcwd()}/about.html")
    page.screenshot(path="jules-scratch/verification/about.png")

    # Verify contact.html
    page.goto(f"file://{os.getcwd()}/contact.html")
    page.screenshot(path="jules-scratch/verification/contact.png")

    # Verify projects.html
    page.goto(f"file://{os.getcwd()}/projects.html")
    page.screenshot(path="jules-scratch/verification/projects.png")

    browser.close()

import os
with sync_playwright() as playwright:
    run(playwright)
