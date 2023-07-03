import React, { useState } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SelectedProductPage from "./pages/SelectedProductPage";
import ViewProduct from "./pages/ViewProduct"
import CartPage from "./pages/cart"
import ProfileInfo from "./components/section/ProfileInfo";
import Header from "./components/Navs/Hreader";
import Footer from "./components/Navs/footer";

 function App() {
   return (
    <div className="App" style={{backgroundColor: "#e7e7e7"}}>

  <Header></Header>
       <Routes>
        <Route path="/category/:category_id/view_product/:id" element={<SelectedProductPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/view_products/category/:id" element={<ViewProduct/>}/>
        <Route path="/profile" element={<ProfileInfo  />} />
        <Route path="/cart" element={<CartPage  />} />
        <Route path="/" element={<Home />} /> 
      </Routes> 
      <footer style={{height:"200px",backgroundColor:"black" ,position:"relative" ,top:"70px"}}> <Footer/></footer> 
    </div>
  );
}

export default App; 

