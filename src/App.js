import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"
import Banner from "./components/banner/banner"
import Feeds from "./components/feeds/feeds"
import Customers from "./components/customers/customers"
import Contactform from "./components/contactform/contactform"
import Details from "./components/details/details"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
    <Banner />
  </div>;
}

function About() {
  return <div>
    <Feeds />
    <Customers/>
  </div>;
}

function Contact() {
  return <div>
    <Contactform/>
    <Details/>
  </div>;
}