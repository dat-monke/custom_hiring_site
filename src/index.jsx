import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import { App, About, Contact, History } from "./App";
import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <App />
);
