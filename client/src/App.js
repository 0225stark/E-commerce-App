import { Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Pagenotfound from "./Pages/Pagenotfound";
import Policy from "./Pages/Policy";
import Register from "./Pages/Auth/Register.js";
import Login from "./Pages/Auth/Login.js";
import Dashboard from "./Pages/User/Dashboard.js";
import PrivateRouth from "./components/Routes/Private.js";
import ForgotPassword from "./Pages/Auth/ForgotPassword.js";
import AdminDashboard from "./Pages/Admin/AdminDashboard.js";
import AdminRoute from "./components/Routes/AdminRouth.js";
import CreateCategory from "./Pages/Admin/CreateCategory.js";
import CreateProduct from "./Pages/Admin/CreateProduct.js";
import Users from "./Pages/Admin/Users.js";
import Orders from "./Pages/User/Orders.js";
import Profile from "./Pages/User/Profile.js";
import Products from "./Pages/Admin/Product.js";
import UpdateProduct from "./Pages/Admin/UpdateProduct.js";
import Search from "./Pages/Search.js";
import ProductDetails from "./Pages/ProductDetails.js";
import Categories from "./Pages/Categories.js";
import CategoryProduct from "./Pages/CategoryProduct.js";
import CartPage from "./Pages/CartPage.js";
import AdminOrders from "./Pages/Admin/AdminOrders.js";

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/product/:slug" element={<ProductDetails/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/category/:slug" element={<CategoryProduct/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/dashboard" element={<PrivateRouth/>}>
          <Route path="user" element={<Dashboard/>}/>
          <Route path="user/orders" element={<Orders/>}/>
          <Route path="user/profile" element={<Profile/>}/>
        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashboard/>}/>
          <Route path="admin/create-category" element={<CreateCategory/>}/>
          <Route path="admin/create-product" element={<CreateProduct/>}/>
          <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
          <Route path="admin/product" element={<Products/>}/>
          <Route path="admin/users" element={<Users/>}/>
          <Route path="admin/orders" element={<AdminOrders/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes>
    </>
  );
}

export default App;