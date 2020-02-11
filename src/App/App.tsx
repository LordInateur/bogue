import React from 'react';
import './App.scss';
import EditionConfig from './EditionConfig/EditionConfig';

function App() {
  return (
    <div className="App h-100">
      <header className="App-header">

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
        
        <a className="navbar-brand" href="#">Bogue</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>  

      
      {/* <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
        
      </header>

        
      <nav id="sidebar" className="bg-danger">
        <div className="container-fluid">
          <h5>Bootstrap Sidebar</h5>

          <div className="container">
            <div> <a href="#">Home</a></div>
            <div> Home </div>
            <div> Home </div>
            <div> Home </div>
            <div> Home </div>

          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <h1 className="pageTitle sideBarMarginLeft">> Edition de config</h1>
        <div id="content" className="sideBarMarginLeft">
          <EditionConfig />
        </div> 
      </div>
    </div>
  );
}

export default App;
