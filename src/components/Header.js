import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="header_wrap">
      <div className="Logo_wrap">
        <div className="Logo">LOGO</div>
        <div className="desc">증명서 통번역 서비스</div>
      </div>
      <div className="Nav_wrap">
        <div>Login</div>
        <div>Join</div>
        <div>FAQ</div>
        <div>고객센터</div>
      </div>
    </div>
  );
};

export default Header