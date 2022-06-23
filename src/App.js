import './App.css';

function App() {
  return (
    <article className="App">
      <h1>Todo List</h1>
      <section className="card">
        <header>
          <input type="checkbox"/>
          <input type="text" placeholder="What needs to be done?"/>
        </header>
        <div className="card--info">
          <span>2 items left</span>
          <span className="card--badge active">all</span>
          <span className="card--badge">active</span>
          <span className="card--badge">completed</span>
        </div>
        <div className="card--tasks">
          <div className="task">
            <input type="checkbox" id="teste" />
            <label htmlFor="teste">teste</label>
            <button>X</button>
          </div>
        </div>
      </section>
    </article>
  );
}

export default App;
