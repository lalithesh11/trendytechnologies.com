
import React from "react";
import ReactDom from "react-dom";
import App from "./Tut78_App";
import {BrowserRouter} from "react-router-dom";
import "./Tut78_index.css";



ReactDom.render(
<BrowserRouter>
<App />
</BrowserRouter>,document.getElementById('root'));

// check index.html

// there are only 12 columns whatever the size of device