import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import AdminMessages from "./pages/AdminMessages";
import RequireAuth from "./components/RequireAuth";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/messages" element={
        <RequireAuth>
        <AdminMessages />
        </RequireAuth>
      } />
       
      </Routes>
      <Footer />
    </>
  );
};

export default App;
