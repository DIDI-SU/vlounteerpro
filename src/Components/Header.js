import IconImage from "../icon/Bigicon.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <a href="/">
        <img src={IconImage} alt="icon" />
      </a>
      <nav>
        <ol>
          <Link to="/">Home</Link>
          <Link to="/main">Main</Link>
          <Link to="/">Contact</Link>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
