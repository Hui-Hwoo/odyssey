import React from "react";
import "./App.css";
// import {
//     HashRouter as Router,
//     Routes,
//     Route,
//     Link,
//     Navigate,
// } from "react-router-dom";
import { HomePage } from "./pages/Home";
// import { AboutPage } from "./pages/About";
// import { ProjectsPage } from "./pages/Projects";
// import { CompetitionsPage } from "./pages/Competitions";
// import { InternsPage } from "./pages/Interns";
// import { ContactPage } from "./pages/Contact";
import { ModeToggle } from "./components/ModeToggle";
import "./variables.css";
import { TimeLinePage, TimeIncident } from "./pages/TimeLine";
import { ColorType } from "./types";

const App = () => {
    const fakeIncidents = [
        {
            tag: [{ tagContent: "tag1", tagColor: ColorType.Blue }],
            date: new Date("2021-01-01"),
            title: "title1",
            content: "content1 a long sentence",
            link: "link1",
        },
        {
            tag: [
                { tagContent: "tag2", tagColor: ColorType.Yellow },
                { tagContent: "tag3", tagColor: ColorType.Green },
            ],
            date: new Date("2022-07-01"),
            title: "title2",
            content:
                "content2 a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text. This is the home page for HashRouter a long sentence to test the wrapping of the text.",
            link: "link2",
        },
        {
            tag: [
                { tagContent: "tag3", tagColor: ColorType.Gray },
                { tagContent: "tag4", tagColor: ColorType.Red },
                { tagContent: "tag5", tagColor: ColorType.Blue },
            ],
            date: new Date("2024-12-02"),
            title: "title3",
            content: "content3",
            link: "link3",
        },
    ] as TimeIncident[];
    return (
        <React.Fragment>
            <div className="ModeToggle">
                <ModeToggle />
            </div>
            <HomePage />
            <TimeLinePage incidents={fakeIncidents} />
        </React.Fragment>
    );
};

export default App;

// eslint-disable-next-line no-lone-blocks
{
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
