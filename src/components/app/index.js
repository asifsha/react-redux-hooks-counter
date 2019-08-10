import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { CounterPage } from "../counter/index";
import About from "../about";
import Header from "../common/Header";


const App = () => (
  <div>
    <BrowserRouter>
      <header>
        <Header />
      </header>

      <main>
        <Route exact path="/" component={CounterPage} />
        <Route exact path="/about-us" component={About} />
      </main>
    </BrowserRouter>
  </div>
);

export default App;
