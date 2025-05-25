Personal Finance Tracker

Personal Finance Tracker is a standalone desktop application designed to help users manage their finances offline. Built with Electron, Node.js, Express, and SQLite, this app enables you to track income and expenses, set monthly budgets, visualize spending with pie charts, and export data to CSV. It’s ideal for users who value privacy and simplicity in financial management.

This project was developed on May 25, 2025, as a learning exercise focused on DOM manipulation, JavaScript, and Electron-based desktop application development.

Features:

- Track Transactions: Add, edit, and delete income and expense transactions, including amount, category, date, and description.
- Filter Transactions: Filter transactions by type (income, expense, or all).
- Set Budgets: Define monthly budgets per category and monitor your spending.
- Visualize Spending: View a pie chart of expenses by category on the dashboard.
- Export Data: Export transactions to a CSV file for backups or further analysis.
- Offline Capability: Uses SQLite for local storage, ensuring full offline access and privacy.
- Windows Desktop App: Packaged as a standalone .exe using Electron.

Tech Stack:

Frontend: HTML, CSS, JavaScript, Chart.js (for visualizations)
Backend: Node.js, Express, SQLite
Desktop App: Electron
Build Tool: electron-builder

Getting Started:

Prerequisites:
- Node.js (v18 or higher): https://nodejs.org/
- Git: https://git-scm.com/
- Windows OS (for packaged .exe; development possible on any OS)

Installation Steps:

1. Clone the Repository:
   git clone https://github.com/your-username/finance-tracker.git
   cd finance-tracker

2. Install Dependencies:
   npm install

3. (Optional) Run Backend Server (without Electron):
   npm start

4. Launch Electron App:
   npm run electron

Build for Windows:

1. Install electron-builder:
   npm install electron-builder --save-dev

2. Build the app:
   npm run build

Usage Instructions:

Dashboard:
- View a pie chart of your expenses by category.
- Use the "Export to CSV" button to back up your transactions.

Transactions:
- Add a new transaction using the form.
- Filter transactions by type using the dropdown.
- Edit or delete existing transactions.

Budgets:
- Set monthly budgets for each category.
- Track your spending progress.

Project Structure:

finance-tracker/
├── backend/
│   ├── routes/            - API routes
│   ├── db.js              - SQLite setup
│   └── server.js          - Express backend
├── frontend/
│   ├── css/               - Stylesheets
│   ├── js/                - JavaScript files
│   ├── index.html         - Dashboard page
│   ├── transactions.html  - Transactions page
│   └── budgets.html       - Budgets page
├── main.js                - Electron main process
├── package.json           - Project metadata
└── README.txt             - Project documentation

Contributing:

1. Fork the repository.
2. Create a new branch:
   git checkout -b feature-name
3. Commit your changes:
   git commit -m "Add feature"
4. Push to your branch:
   git push origin feature-name
5. Open a Pull Request.

Known Issues:

- Pie Chart Rendering: Make sure the backend server is running and that expense data is available. Use Ctrl+Shift+I in Electron to check the developer console for errors.
- Windows-Only Build: The default configuration targets Windows. Update package.json if building for other platforms.

Future Improvements:

- Add filtering by category or date
- Implement budget alerts
- Support multi-user accounts
- Add unit tests
- Optimize SQLite queries

License:

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments:

- Built on May 25, 2025, for learning DOM manipulation and Electron development.
- Thanks to the Electron, Chart.js, and SQLite communities.

Contact:

For questions, open an issue or reach out to me.
