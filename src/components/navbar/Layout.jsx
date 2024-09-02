import React from "react";
import NavBar from "./NavBar";
import Footeer from "./Footeer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footeer />
    </>
  );
};

export default Layout;
