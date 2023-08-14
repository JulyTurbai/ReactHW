import Menu from "../Menu/Menu";
import './Footer.css';
const menuItems = ['Home', 'About', 'Authors', 'Blog', 'Contacts'];
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-block">
                <h3 className="footer-block__logo">BooksLife</h3>
                <Menu data={ menuItems } id={"footer"}/>
            </div>
        </div>
    )
}

export default Footer;