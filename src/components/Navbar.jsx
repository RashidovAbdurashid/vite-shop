import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link border="none" to="/">
        Bosh sahifa
      </Link>
      <Link to="/products">Mahsulotlar</Link>
      <Link to="/users">Foydalanuvchilar</Link>
    </nav>
  );
}

export default Navbar;
