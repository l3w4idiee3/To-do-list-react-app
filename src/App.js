import React from 'react';
import './App.css';
//Importing components
import Form from './components/form';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Lewis Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
