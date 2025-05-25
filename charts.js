async function loadChart() {
  const response = await fetch('http://localhost:5000/api/transactions');
  const transactions = await response.json();
  const categories = {};
  transactions
    .filter(t => t.type === 'expense')
    .forEach(t => {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    });
  const ctx = document.getElementById('spendingChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(categories),
      datasets: [{
        data: Object.values(categories),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
      }],
    },
  });
}

// CSV Export
async function exportToCSV() {
  const response = await fetch('http://localhost:5000/api/transactions');
  const transactions = await response.json();
  const csv = ['id,type,amount,category,date,description', ...transactions.map(t => 
    `${t.id},${t.type},${t.amount},${t.category},${t.date},${t.description || ''}`
  )].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'transactions.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}

if (document.getElementById('spendingChart')) loadChart();