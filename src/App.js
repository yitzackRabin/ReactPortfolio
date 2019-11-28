import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";

function App() {
  return (
      <div id="colorlib-page">
          <div id="container-wrap">
              <Sidebar/>
              <div id="colorlib-main">
                  <Introduction/>
                  <About/>
                  <Timeline/>
              </div>
          </div>
      </div>
  );
}

export default App;
