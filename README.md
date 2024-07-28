This repository contains Web UI automation test framework written with TypeScript and Playwright and implements Page Object Model design pattern.

To run test locally, please follow these steps:

1. Clone this repository
2. Ensure that node.js is installed
3. Run npm install to install node modules
4. Run tests with 'npm run test' - it will run test in chromium browser (firefox and webkit are commented out in playwright.config.ts for execution speed)
5. View test execution results with 'npx playwright show-report'

Test scenarios:

1. add-new-customer - Add a new customer
2. customer-login - Login as new customer
3. customer-logout - Logout as new customer
4. customer-transactions - Perform deposit and withdrawal transactions as new customer and view transaction history
5. manager-login - Login as Bank Manager
6. open-account - Open account for new customer
7. post-account-creation - Return to Main Page after creating a new account for customer

Test data file:
data/input.csv
