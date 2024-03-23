import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as BRouter, Routes, Route, Link, uselocation } from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from "./components/App";
import Card from "./cardcomponent/index"
import Pics from "./components/pics/components/App.js"
import Season from "./components/season/index.js"
import Song from "./components/song/index.js"
import Widget from "./components/widget/App.js"
const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BRouter>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/season">
                season
              </Link>
            </li>
            <li>
              <Link to="/song">
                song
              </Link>
            </li>
            <li>
              <Link to="/Widget">
              Widget
              </Link>
            </li>
          </ul>
          <Routes>
            <Route
              path="/"
              element={<App />}
            ></Route>
            <Route
              path="/about"
              element={<Card />}
            ></Route>
            <Route
              path="/contact"
              element={<Pics />}
            ></Route>
            <Route
              path="/season"
              element={<Season />}
            ></Route>
            <Route
              path="/song"
              element={<Song />}
            ></Route>
            <Route
              path="/widget"
              element={<Widget />}
            ></Route>
          </Routes>
        </div>
      </BRouter>
    </Provider>
  </React.StrictMode>
);
