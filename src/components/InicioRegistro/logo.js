import React from 'react';
import logo from "../../assets/img/LogoFlowStock_6.png"; 

const Logo = () => {
  return (
    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
      <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default Logo;
