import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuItem from "./components/menuItem/MenuItem";
import Navbar from "./components/navbar/Navbar";
import CartContainer from "./pages/cartContainer/CartContainer";
import PageNotFound from "./pages/error/PageNotFound";
import Home from "./pages/home/Home";
import MenuContainer from "./pages/menuContainer/MenuContainer";

function App() {
  return (
    <div className="container">
      <div className="header">
        <Navbar />
      </div>

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuContainer />} />
          <Route path="/menu/:id" element={<MenuItem />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
