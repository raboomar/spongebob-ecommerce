import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CartContainer from "./pages/cartContainer/CartContainer";
import PageNotFound from "./pages/error/PageNotFound";
import Home from "./pages/home/Home";
import MenuContainer from "./pages/menuContainer/MenuContainer";
import MenuITemContainer from "./pages/menuItemContainer/MenuITemContainer";
import "./App.css";
import Payment from "./pages/payment/Payment";
import OrderConfirmationContainer from "./pages/orderCinfirm/OrderConfirmationContainer";
import Register from "./components/appUserForm/Register";
import Login from "./components/appUserForm/Login";
import { ToastContainer } from "react-toastify";
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
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/confirmation"
            element={<OrderConfirmationContainer />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </div>

      {/* <div className="footer">Footer</div> */}
    </div>
  );
}

export default App;
