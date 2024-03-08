import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
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
                                <Link to="/hwoo/">Home</Link>
                            </li>
                            <li>
                                <Link to="/hwoo/about">About</Link>
                            </li>
                            <li>
                                <Link to="/hwoo/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/hwoo/competitions">Competitions</Link>
                            </li>
                            <li>
                                <Link to="/hwoo/interns">Interns</Link>
                            </li>
                            <li>
                                <Link to="/hwoo/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/hwoo/" element={<HomePage />} />
                        <Route path="/hwoo/about" element={<AboutPage />} />
                        <Route path="/hwoo/projects" element={<ProjectsPage />} />
                        <Route
                            path="/hwoo/competitions"
                            element={<CompetitionsPage />}
                        />
                        <Route path="/hwoo/interns" element={<InternsPage />} />
                        <Route path="/hwoo/contact" element={<ContactPage />} />
                        <Route path="*" element={<Navigate to="/hwoo" replace />} />
                    </Routes>
                </div>
            </Router>
        </React.Fragment>
    );
};

export default App;
