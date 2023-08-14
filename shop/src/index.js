import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./_app";
import {BrowserRouter, HashRouter} from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        {/*<BrowserRouter>*/}
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>
);

