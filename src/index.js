import React from "react";
import ReactDOM from "react-dom";
import App from "./screens/App";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import BookDetailsScreen from './screens/BookDetailsScreen'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div>
        <Route path='/' exact={true} component={App} />
        <Route path='/volumes/:id' exact={true} component={BookDetailsScreen}/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
