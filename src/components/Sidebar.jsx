import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar bg-light ">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeClassName="active"
          >
            <FaIcons.FaHome className="me-2" /> Métricas
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/sales"
            exact
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeClassName="active"
          >
            <FaIcons.FaRegChartBar className="me-2" /> Grafico
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/clients"
            exact
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeClassName="active"
          >
            <FaIcons.FaUserFriends className="me-2" /> Proyecciones
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
