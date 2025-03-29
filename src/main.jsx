import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./screens/Home/home.jsx";
import {TutorialPage} from "./screens/Tutorial/tutorial.jsx";
import {EditorIntro} from "./screens/EditorIntro/intro.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/tutorials" element={<TutorialPage />} />
                <Route path="/editor" element={<EditorIntro />} />
            </Routes>
        </Router>
    </StrictMode>
);
