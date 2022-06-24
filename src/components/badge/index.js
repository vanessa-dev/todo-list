import './style.css';
function Badge(props) {
  
  const removeActive = () => {
    const badges = document.querySelectorAll(".card--badge");
    badges.forEach((item) => item.classList.remove('active'));
  }

  const handleClick = ({target}) => { 
    removeActive();
    target.classList.add('active');
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((item) => {
      const checked = item.firstChild.checked;
      if((checked && target.innerText === "active") || (!checked && target.innerText === "completed")) {
        item.style.display = "none";
        return;
      } 
      item.style.display = "grid";
    })
  }

  return (<button onClick={handleClick} className={props.class}>{props.children}</button>);
}
export default Badge;