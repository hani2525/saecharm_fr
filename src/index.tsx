import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router/Router";
import "styles/reset.scss";
import "styles/common.scss";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);
root.render(<Router />);
