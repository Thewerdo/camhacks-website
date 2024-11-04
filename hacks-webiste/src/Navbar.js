import logo from "./logo.png"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} className="floatleft logosize" alt=""/>
            <ul className="navbar">
                <li><button>login placeholder</button></li>
                <li><a href="#team-area">The Team</a></li>
                <li><a href="#faq-area">FAQ</a></li>
                <li><a href="#sponsors-area">Sponsors</a></li>
                <li><a href="#about-area">About</a></li>
                <li><a href="#home-area">Home</a></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;