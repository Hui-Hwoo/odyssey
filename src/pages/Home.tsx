import React from "react";
import { Avatar } from "../components/Avatar";

export const HomePage = () => {
    return (
        <React.Fragment>
            <div>
                <Avatar
                    url={
                        "https://framerusercontent.com/images/dvrschHGP374SPK1HpDjWPcdFEk.png"
                    }
                    hoverUrl="https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg"
                    name="Hui Hu"
                    intro="This is the home page for HashRouter"
                    linkedIn="https://www.linkedin.com/in/hui-hwoo/"
                    github="https://github.com/Hui-Hwoo"
                    mail="hui.hwoo@gmail.com"
                    // twitter="testlink"
                    // instagram="testlink"
                    // youtube="testlink"
                />
            </div>
        </React.Fragment>
    );
};
