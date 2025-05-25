# Personal finance-tracker

Personal Finance Tracker is a standalone desktop application designed to help users manage their finances offline. Built with Electron, Node.js, Express, and SQLite, this app allows you to track income and expenses, set monthly budgets, visualize spending with a pie chart, and export data to CSV. It’s perfect for users who value privacy and simplicity in financial management.
This project was developed as part of a learning exercise on May 25, 2025, focusing on DOM manipulation, JavaScript, and Electron-based desktop app development.

Features
Track Transactions: Add, edit, and delete income and expense transactions with details like amount, category, date, and description.
Filter Transactions: Filter transactions by type (income, expense, or all) on the transactions page.
Set Budgets: Define monthly budgets per category and track spending against them.
Visualize Spending: View a pie chart of expenses by category on the dashboard.
Export Data: Export transactions to a CSV file for backups or analysis.
Offline Capability: Uses SQLite for local storage, ensuring privacy and offline access.
Windows Desktop App: Packaged as a standalone .exe for Windows using Electron.

Tech Stack
Frontend: HTML, CSS, JavaScript, Chart.js (for visualizations)
Backend: Node.js, Express, SQLite (for local database)
Desktop App: Electron (for Windows packaging)
Build Tool: electron-builder (for creating the Windows executable)

Getting Started

Prerequisites
Node.js (v18 or higher): Download Node.js
Git: Download Git
Windows OS: For the packaged .exe (development can be done on any OS)
Installation
Clone the Repository:
bash
git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker

Install Dependencies:
Run this command in the folder containing the project using the command terminal

#npm install
Run the Backend Server (optional, if testing without Electron):
#npm start
Launch the Electron App:
bash
npm run electron
Build for Windows
To create a standalone Windows executable:
Install electron-builder:
bash
npm install electron-builder --save-dev
Build the app:
bash
npm run build

Usage
Dashboard: View a pie chart of your expenses by category. Use the "Export to CSV" button to back up your transactions.
Transactions:
Add a new transaction using the form.
Filter transactions by type using the dropdown.
Edit or delete existing transactions.

Budgets: Set monthly budgets for categories and track your spending.
Project Structure
finance-tracker/
├── backend/
│   ├── routes/           # API routes
│   ├── db.js            # SQLite setup
│   ├── server.js        # Express server
├── frontend/
│   ├── css/             # CSS styles
│   ├── js/              # JavaScript
│   ├── index.html       # Dashboard page
│   ├── transactions.html # Transactions page
│   ├── budgets.html     # Budgets page
├── main.js              # Electron main process
├── package.json         # Project metadata
└── README.md            # Documentation

Contributing
Fork the repository.
Create a branch (git checkout -b ......)
Commit your changes (git commit -m ......)
Push to your branch (git push ......)
Open a Pull Request.
Known Issues
Pie Chart Rendering: Ensure the backend server is running and there are expense transactions. Check the console (Ctrl+Shift+I in Electron) for errors.
Windows-Only Build: The build targets Windows. Modify package.json for other platforms.

Future Improvements
Add filtering by category or date.
Implement budget alerts.
Support multi-user accounts.
Add unit tests.
Optimize SQLite queries.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments
Built on May 25, 2025, for learning DOM manipulation and Electron.
Thanks to Electron, Chart.js, and SQLite communities.
Contact
For questions, open an issue or reach out to me
