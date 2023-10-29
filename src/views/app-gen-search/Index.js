import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default Index;
