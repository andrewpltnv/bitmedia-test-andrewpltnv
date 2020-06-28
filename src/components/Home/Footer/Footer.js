import React from "react";

import "./footer.scss";
import Form from "./Form";

const Footer = () => {
  return(
    <footer>
      <Form/>
      <div className="rights">
        <h3>AppCo</h3>
        <p>All rights reserved by ThemeTags</p>
        <p>Copyrights © 2019.</p>
      </div>
    </footer>
  );
};

export default Footer;
