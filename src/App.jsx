import React from "react";
import Nav from "./share/Navbar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./share/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <div className="min-h-[calc(100vh-390px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
