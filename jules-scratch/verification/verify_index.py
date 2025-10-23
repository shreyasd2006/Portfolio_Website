from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    path = os.path.abspath('index.html')
    page.goto(f'file://{path}')
    page.screenshot(path='jules-scratch/verification/index.png')
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
