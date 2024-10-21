# Stock Monitoring Dashboard

In the project directory, you can run:

### `npm install`

Install the node modules to run the app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

## Key Implementations

### 1. Stock Data Integration via Finnhub API
- Integrated the **Finnhub API** to fetch real-time stock data, including stock symbols, current prices, and percentage changes from the previous day.
- Utilized **Promise.all()** for concurrent data retrieval, ensuring efficient fetching for multiple stock symbols.

### 2. Sorting Functionality
- Implemented sorting for stocks based on **price** or **percentage change**.
- Users can choose to sort in **ascending** or **descending** order, providing flexibility in viewing stock data.
- Dynamic sorting based on the selected criteria and order.

### 3. Filter by Percentage Change
- Added a filter feature that allows users to display only stocks with a percentage change exceeding a user-defined threshold.
- The filter updates in real-time based on user input and applies to both positive and negative changes.

### 4. Local Storage for Preferences
- User preferences for filtering (percentage change threshold) and sorting (field and order) are stored in **localStorage**.
- Preferences persist across page reloads, enhancing user experience.

### 5. Modular Code Structure
- Refactored the project for improved maintainability:
  - Created a `pages` folder containing the **MainPage** component for stock display and control.
  - Separated SCSS files for component-specific styling to maintain clean, modular code.
  - Organized layout into components like `StockItem`, `StockList`, and `Filter` to enhance separation of concerns.

### 6. UI Enhancements
- Employed **Flexbox** for aligning stock symbol, price, and percentage change, ensuring proper centering of elements.
- Improved visual layout with appropriate spacing and alignment, using properties like `justify-content: space-between` and `text-align: center`.

### 7. Clean and Responsive Design
- Styled the application according to modern UI principles, prioritizing readability and usability.
- Added hover effects and subtle transitions to enhance user interaction.