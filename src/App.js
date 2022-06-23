import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleChange = ({target, which}) => {
    if (which === 13) {
      setTasks([...tasks, target.value]);
      target.value = "";
    }
  }
  
  const handleClick = (itemIndex) => {
    setTasks(tasks.filter((item, index) => index !== itemIndex));
  }
  return (
    <article className="App">
      <h1>Todo List</h1>
      <section className="card">
        <header>
          <input type="checkbox"/>
          <input type="text"   onKeyPress={handleChange} placeholder="What needs to be done?"/>
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
           <input type="checkbox" id={index}/>
           <label htmlFor={index}>{item}</label>
           <button onClick={() => handleClick(index)}>X</button>
          </div>
        ))}
        </div>
      </section>
    </article>
  );
}

export default App;
