import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import LoginForm from "../Login/LoginForm";
import { Drawer } from "antd";
import { Link } from 'react-router-dom';


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["NavWrap"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <>
      <section className={navbarClasses.join(" ")}>
        <div className="navbar">
        <div className="logo">
           <Link to ="/"> <h3>Pleasing Beauty<span>.</span></h3></Link>
        </div>
          <div className="menu">
          <Link to ="/Cart"><i class="fa-solid fa-cart-shopping"></i></Link>
            {/* <div className="prof">Register As A Professional</div> */}
            <span
              onClick={() => {
                setVisible(true);
              }}
            >
              Login
            </span>
            <Drawer visible={visible}
              title={"Please login to continue"}
              // footer={"@pleasing_beauty"}
              closable={"false"}
              mask={false}
              onClose={() => {
                setVisible(false);
              }}

              className="shadow"
            >
              <LoginForm />
            </Drawer>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;