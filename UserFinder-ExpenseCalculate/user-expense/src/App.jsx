/*import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [array, setArray] = useState([]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setArray(JSON.parse(savedExpenses));
    }
  }, []);

  function handler(e) {
    e.preventDefault();
    
    

    const newExpense = {
      category: category,
      description: description,
      price: Number(price)
    };

    const newArray = [...array, newExpense];
    console.log(typeof(newArray));  
    setArray(newArray);
    
    
    localStorage.setItem('expenses', JSON.stringify(newArray));
    
    
    setCategory('');
    setDescription('');
    setPrice('');
  }

  
  const total = array.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <form onSubmit={handler}>
        <h1>Expense Tracker</h1>

        <input 
          type="text" 
          placeholder='Category here...' 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        
        <input 
          type="text" 
          placeholder='Description here...' 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <input 
          type="number" 
          placeholder='Price here...' 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        
        <button type="submit">Add</button>
      </form>
      
     
      <div className="expenses-list">
        <h2>All Expenses</h2>
        {array.map((expense, index) => (
          <div key={index} className="expense-item">
            <p><strong>{expense.category}</strong>: {expense.description} - ${expense.price}</p>
          </div>
        ))}
      </div>
      
      <div className="container2">
        <h1>Total Expense</h1>
        <p>${total}</p>
      </div>
    </div>
  );
}
export default App;*/

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);  
  const [id, setId] = useState('');        

  useEffect(() => {
    if (!id) return; 

    async function fetchUser() {
      const response = await fetch(`https://randomuser.me/api/?seed=${id}`);
      const data = await response.json();
      setUser(data.results[0]); 
    }

    fetchUser();
  }, [id]); 

  return (
    <div>
      <h1>Random User Finder</h1>

     
      <input
        type="text"
        placeholder="Enter user id..."
        value={id}
        onChange={(e) => setId(e.target.value)} 
      />

    
      {user && (
        <div className="display">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Cell:</strong> {user.cell}</p>
        </div>
      )}
    </div>
  );
}

export default App;

