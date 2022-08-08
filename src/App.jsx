import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Navigation from "./components/Navbar.jsx";
import Home from "./pages/DatosProduct.jsx";
import Clients from "./pages/Clients.jsx";
import Sales from "./pages/DatosdeGrafica.jsx";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
