import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import MainPage from "./pages/MainPage.jsx";
import CodePage from "./pages/CodePage.jsx";
import DesignPage from "./pages/DesignPage.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/grid-portfolio" element={<MainPage />} />
            <Route
                path="/grid-portfolio/code"
                element={<CodePage />}
            />
            <Route
                path="/grid-portfolio/design"
                element={<DesignPage />}
            />
        </Routes>
    </BrowserRouter>
);
