import React from "react";
import "./App.css";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ProjectsPage } from "./pages/Projects";
import { CompetitionsPage } from "./pages/Competitions";
import { InternsPage } from "./pages/Interns";
import { ContactPage } from "./pages/Contact";

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/competitions">Competitions</Link>
                            </li>
                            <li>
                                <Link to="/interns">Interns</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route
                            path="/competitions"
                            element={<CompetitionsPage />}
                        />
                        <Route path="/interns" element={<InternsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App;
