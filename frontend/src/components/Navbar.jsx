import React from "react";
import Searchbar from "./Searchbar";
function Navbar() {
  return (
    <div className="nav-container ">
      <div className="left-part">
        <img src="/assets/images/amazon-logo.png" alt="" />
        <span>Deliver to: User</span>
      </div>
      <Searchbar />
      <div className="right-part">
        <span>
          Hello, User<br></br>Account and Lists
        </span>

        <span>Returns & orders</span>
        <img src="/assets/images/cart.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
