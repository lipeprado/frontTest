import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse bg-inverse">
      <div className="container">
        <div className="navbar-brand" onClick={() => console.log("Teste")}>Home</div>
      </div>
    </nav>
  );
};

export default Header;
