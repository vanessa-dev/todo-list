import './style.css';
function Badge(props) {
  const removeActive = () => {
    const badges = document.querySelectorAll("card--badge");
    badges.forEach((item) => item.classList.remove('active'));
  }
  
  const handleClick = ({target}) => {
    removeActive();
    target.classList.add('active');
  }

  return (<button onClick={handleClick} className={props.class}>{props.children}</button>);
}
export default Badge;