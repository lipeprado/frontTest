import React from "react";
import "./app.sass";

const App = () => {
  return (
    <div className="container">
      <h1 id="idh1" className="container__header">
        React Boilerplate
      </h1>
      <div className="wrapper_features">
        <span className="features">React</span>
        <span className="features">Redux</span>
        <span className="features">Sass</span>
        <span className="features">Webpack</span>
        <span className="features">Eslint</span>
      </div>
    </div>
  );
};

export default App;
