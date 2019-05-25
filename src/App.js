import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about me</NavLink>
            </li>
            <li>
              <NavLink to="/projects">my projects</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {props.children}
    </div>
  );
}

export default App;
