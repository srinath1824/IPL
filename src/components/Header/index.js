import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          background: "#19398A",
          height: "70px",
          position: "relative",
          width: "100%",
          zIndex: 1
        }}
      >
        <img
          style={{ width: "150px", height: "70px" }}
          src="https://resources.platform.iplt20.com/IPL/photo/2018/05/13/445a4aab-3450-48d6-a0c1-5b56a78ddef5/logo.jpg"
          alt="logo"
        />
      </div>
    );
  }
}

export default Header;
