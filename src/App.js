import { useState } from 'react';
import './App.css';
import Badge from './components/badge';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleKeyPress = ({target, which}) => {
    if (which === 13) {
      setTasks([...tasks, {nome: target.value, checked: false}]);
      target.value = "";
    }
  }

  const taskToDo = () => {
    let total = tasks.filter((item) => !item.checked);
    return total.length;
  }

  const handleClick = (itemIndex) => {
    setTasks(tasks.filter((item, index) => index !== itemIndex));
  }

  const checkAll = ({target}) => {
    setTasks(tasks.map((item) => {return {nome: item.nome, checked: target.checked}}));
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
        {tasks.length > 0  && <input onClick={checkAll} type="checkbox"/>}
          <input type="text"   onKeyPress={handleKeyPress} placeholder="What needs to be done?"/>
        </header>
  
        {
          tasks.length > 0  && 
          <div className="card--info">
            <Badge>{taskToDo()} items left</Badge>
            <Badge class="card--badge">all</Badge>
            <Badge class="card--badge">active</Badge>
            <Badge class="card--badge">completed</Badge>
          </div>
        } 
        <div className="card--tasks">
        {tasks.map((item, index) => (
          <div className="task" key={index}>
           <input type="checkbox" id={`task_${index}`} onChange={() => handleChange(index)} checked={item.checked}/>
           <label htmlFor={`task_${index}`}>{item.nome}</label>
           <button onClick={() => handleClick(index)}>X</button>
          </div>
        ))
        }
        </div>
      </section>
    </article>
  );
}

export default App;
