'use client';
import { useState } from 'react';

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');

  const handleAddExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
          placeholder="Add new expense"
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddExpense}
          className="ml-2 bg-primary text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="bg-white p-4 mb-2 shadow rounded">
            {expense}
          </li>
        ))}
      </ul>
    </div>
  );
}
