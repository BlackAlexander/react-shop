import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./Display.css";

import Display from "./_app";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
      <Display />
    </StrictMode>
);

