import { Link } from "react-router-dom";

const NavMenu = () => {
  const links = [
    { name: "Tourism" },
    { name: "Technology" },
    { name: "Fitness" },
    { name: "Food" },
  ];
  return (
    <ul className="navMenu">
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      {links.map((item) => (
        <li>
          <Link className="link" to={`/${item.name}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
