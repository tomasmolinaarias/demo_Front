import { Navbar, NavbarBrand } from "reactstrap";
import "../App.scss";

const Navigation = () => {
  return (
    <div>
      <Navbar color="light" expand="md">
        <NavbarBrand href="/">
          <span className="brand">Panel de precios de mercado.</span>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navigation;
