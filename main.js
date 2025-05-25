// API base URL
const API_URL = 'http://localhost:5000/api';

// Load transactions
async function loadTransactions() {
  const response = await fetch(`${API_URL}/transactions`);
  const transactions = await response.json();
  const list = document.getElementById('transactionList');
  list.innerHTML = '';
  transactions.forEach(t => {
    const div = document.createElement('div');
    div.className = 'transaction';
    div.innerHTML = `
      <h3>${t.category}: $${t.amount}</h3>
      <p>${t.type} on ${new Date(t.date).toLocaleDateString()}</p>
      <p>${t.description || 'No description'}</p>
      <button onclick="editTransaction(${t.id}, '${t.type}', ${t.amount}, '${t.category}', '${t.date}', '${t.description || ''}')">Edit</button>
      <button onclick="deleteTransaction(${t.id})">Delete</button>
    `;
    list.appendChild(div);
  });
}

// Add or update transaction
document.getElementById('transactionForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('transactionId').value;
  const data = {
    type: document.getElementById('type').value,
    amount: parseFloat(document.getElementById('amount').value),
    category: document.getElementById('category').value,
    date: document.getElementById('date').value,
    description: document.getElementById('description').value,
  };
  const method = id ? 'PUT' : 'POST';
  const url = id ? `${API_URL}/transactions/${id}` : `${API_URL}/transactions`;
  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  loadTransactions();
  document.getElementById('transactionForm').reset();
  document.getElementById('transactionId').value = '';
});

// Edit transaction
function editTransaction(id, type, amount, category, date, description) {
  document.getElementById('transactionId').value = id;
  document.getElementById('type').value = type;
  document.getElementById('amount').value = amount;
  document.getElementById('category').value = category;
  document.getElementById('date').value = date;
  document.getElementById('description').value = description;
}

// Delete transaction
async function deleteTransaction(id) {
  await fetch(`${API_URL}/transactions/${id}`, { method: 'DELETE' });
  loadTransactions();
}

// Load budgets
async function loadBudgets() {
  const response = await fetch(`${API_URL}/budgets`);
  const budgets = await response.json();
  const list = document.getElementById('budgetList');
  list.innerHTML = '';
  budgets.forEach(b => {
    const div = document.createElement('div');
    div.className = 'budget';
    div.innerHTML = `<h3>${b.category}: $${b.amount} (${b.month})</h3>`;
    list.appendChild(div);
  });
}

// Set budget
document.getElementById('budgetForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    category: document.getElementById('budgetCategory').value,
    amount: parseFloat(document.getElementById('budgetAmount').value),
    month: document.getElementById('budgetMonth').value,
  };
  await fetch(`${API_URL}/budgets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  loadBudgets();
  document.getElementById('budgetForm').reset();
});

// Load data on page load
if (document.getElementById('transactionList')) loadTransactions();
if (document.getElementById('budgetList')) loadBudgets();