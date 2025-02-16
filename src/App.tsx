import React from "react";
import "./App.css";
import "./variables.css";
import { timelineIncidents } from "./constant";
// import { ModeToggle } from "./components/ModeToggle";
import { HomePage } from "./pages/Home";
import { TimeLinePage, TimeIncident } from "./pages/TimeLine";

const App = () => {
    const incidents = timelineIncidents as TimeIncident[];
    return (
        <React.Fragment>
            {/* <div className="ModeToggle">
                <ModeToggle />
            </div> */}
            <HomePage />
            <TimeLinePage incidents={incidents} />
        </React.Fragment>
    );
};

export default App;

// eslint-disable-next-line no-lone-blocks
{
    // import {
    //     HashRouter as Router,
    //     Routes,
    //     Route,
    //     Link,
    //     Navigate,
    // } from "react-router-dom";
    /* <Router>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
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
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/interns" element={<InternsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </div>
</Router>; */
}
