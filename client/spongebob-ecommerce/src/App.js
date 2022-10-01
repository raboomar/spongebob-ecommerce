import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CartContainer from "./pages/cartContainer/CartContainer";
import PageNotFound from "./pages/error/PageNotFound";
import Home from "./pages/home/Home";
import MenuContainer from "./pages/menuContainer/MenuContainer";
import MenuITemContainer from "./pages/menuItemContainer/MenuITemContainer";
import "./App.css";

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
          <Route path="/menu/:id" element={<MenuITemContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
