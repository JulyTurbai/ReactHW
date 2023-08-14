import './Menu.css';
const Menu = (props) => {
    return (
       <div className="menu">
            <ul className="menu-items">
                {props.data.map(item => <li key ={ item }className="menu-items__item" id={props.id}>{ item }</li>)}
            </ul>
       </div>
    )
  } 

export default Menu;