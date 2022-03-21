import IconImage from "../../icon/Bigicon.png";

function Header() {
  return (
    <header>
      <a href="/">
        <img src={IconImage} alt="icon" />
      </a>
      <nav>
        <ol>
          <li>Home</li>
          <li>Main</li>
          <li>Contact</li>
        </ol>
      </nav>
    </header>
  );
}
export default Header;
