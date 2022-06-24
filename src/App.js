import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleKeyPress = ({target, which}) => {
    if (which === 13) {
      setTasks([...tasks, {nome: target.value, checked: false}]);
      target.value = "";
    }
  }
  
  const handleClick = (itemIndex) => {
    setTasks(tasks.filter((item, index) => index !== itemIndex));
  }

  const handleChange = (itemIndex) => {
    setTasks(tasks.map((item, index) => {
      if( itemIndex === index) {
        item = {nome: item.nome, checked: !item.checked}
      }
      return item;
    }));
  }

  return (
    <article className="App">
      <h1>Todo List</h1>
      <section className="card">
        <header>
          <input type="checkbox"/>
          <input type="text"   onKeyPress={handleKeyPress} placeholder="What needs to be done?"/>
        </header>
  
        {
          tasks.length > 0  && 
          <div className="card--info">
            <span>2 items left</span>
            <span className="card--badge active">all</span>
            <span className="card--badge">active</span>
            <span className="card--badge">completed</span>
          </div>
        } 
        <div className="card--tasks">
        {tasks.map((item, index) => (
          <div className="task" key={index}>
           <input type="checkbox" id={`task_${index}`} onChange={() => handleChange(index)} checked={item.checked}/>
           <label htmlFor={`task_${index}`}>{item.nome}</label>
           <button onClick={() => handleClick(index)}>X</button>
          </div>
        ))}
        </div>
      </section>
    </article>
  );
}

export default App;
