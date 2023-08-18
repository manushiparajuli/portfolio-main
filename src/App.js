import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Gallary from "./components/Gallary/Gallary";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App" id="scroll">
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/Gallary" component={Gallary} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
