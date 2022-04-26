import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global-styles.css";
import Home from "./templates/Home/index";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Home />);
