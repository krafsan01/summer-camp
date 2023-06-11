import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Header";
import Footer from "../Components/Common/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Layout;
