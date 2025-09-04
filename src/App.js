import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Products from "./Component/Products";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Layout from "./Component/Layout";
import PageHeader from "./Component/PageHeader";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";

export default function  App() {
  return (
  <BrowserRouter>
  <ScrollToTop />
  <NavBar/>
  {/* <Layout/> */}
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/layout" element={<Layout/>} /> */}
          <Route path="/header" element={<PageHeader/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}