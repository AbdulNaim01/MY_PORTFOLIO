import React from "react";
import Loaderfunc from "./components/Loaderfunc";
import Index from "./components/Index";
import { Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router basename="/MY_PORTFOLIO/">
      <Loaderfunc />
      </Router>
      {/* <Index /> */}
    </>
  );
}

export default App;
