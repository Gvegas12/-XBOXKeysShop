import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import NavBar from "../components/templates/NavBar";
import { NavBarUtils } from "../utils/NavBar.utils";

const RouterLayout: React.FC = () => {
  return (
    <>
      <Header />
      <NavBar NavBarItemsArray={NavBarUtils} />
      <main className="main-content-wrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RouterLayout;
