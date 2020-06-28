import React from "react";

import "./home.scss"
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";

const Home = (props) => {

  return(
    <>
      <Header/>
      <Cards/>
      <Footer/>
    </>
  );
};

export default Home;
