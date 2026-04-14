# Currency Convertor

A simple web-based currency converter that lets users enter an amount, choose source and target currencies, and fetch live exchange rates.

## Features

- Convert currency values in real time using an online exchange-rate API.
- Select `From` and `To` currencies from dropdown lists.
- Auto-update country flags when currency selection changes.
- Input validation for empty or invalid amounts (defaults to `1`).
- Clean, centered UI built with HTML and CSS.

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla JS)
- [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api)
- [Flags API](https://flagsapi.com/)
- [Font Awesome](https://fontawesome.com/) (for swap arrow icon)

## Project Files

- `currency_convertor.html`  
  Main webpage structure with amount input, currency dropdowns, result area, and convert button.

- `currency_convertor.css`  
  Styling for layout, container, controls, and output section.

- `code.js`  
  Contains the `countryList` object that maps currency codes (like `USD`, `INR`) to country codes for flag images.

- `currency_convertor.js`  
  Main logic:
  - populates dropdowns using `countryList`
  - updates flag image on currency change
  - fetches exchange rates from API
  - calculates and displays final converted value

## How It Works

1. On page load, both currency dropdowns are filled with currency codes from `countryList`.
2. Default selection is:
   - `From`: `USD`
   - `To`: `INR`
3. When user changes a currency, the corresponding flag updates.
4. On clicking **get exchange rates**:
   - the app validates amount
   - calls API endpoint:
     `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{from}.json`
   - reads target currency rate
   - displays result in format:
     `amount FROM = converted_amount TO`

## Run Locally

1. Make sure all files are in the same folder:
   - `currency_convertor.html`
   - `currency_convertor.css`
   - `currency_convertor.js`
   - `code.js`
2. Open `currency_convertor.html` in your browser.
3. Enter amount, select currencies, and click **get exchange rates**.

## Notes

- Internet connection is required because exchange rates and flags are fetched online.
- Since this is a frontend-only project, no installation or backend setup is needed.
