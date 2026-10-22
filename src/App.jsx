import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminMessages from "./pages/AdminMessages";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Old multi-page URLs now point at their section on the home page */}
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/messages"
            element={
              <RequireAuth>
                <AdminMessages />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
