import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="container header">
      <Logo />
      <NavMenu />
    </header>
  );
};

export default Header;
