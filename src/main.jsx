import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Resume from "./Resume";
import Contact from "./Contact";
import Aboutme from "./Aboutme";
import Error from "./Error";
import Work from "./Work";
import "./App.css";
import CustomCursor from "./components/custom-cursor/cursor-context";
import Cursor from "./components/custom-cursor/cursor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Cursor />
    <CustomCursor.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CustomCursor.Provider>
  </>
);
