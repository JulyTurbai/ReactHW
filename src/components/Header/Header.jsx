import Menu from "../Menu/Menu";
import './Header.css';

const menuItems = ['Home', 'About', 'Authors', 'Blog', 'Contacts'];
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h1>BooksLife</h1>  
            </div>
            <Menu data={ menuItems } id={"header"}/>
        </div>
    )
}

export default Header;