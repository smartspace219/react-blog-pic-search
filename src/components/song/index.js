import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";
export default function Song (){
//const root = ReactDOM.createRoot(document.getElementById("root"));
return(
  
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  
);
}