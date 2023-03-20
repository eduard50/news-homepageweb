import React from "react";


export default function MainContent(){
    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="grid_container">
                    <div className="grid_item main_image">
                        <img src="./src/assets/images/image-web-3-desktop.jpg" alt="main_image" />
                    </div>
                    <div className="grid_item main_sub">
                        <h2 id="main_subtitle">The Bright Future of Web 3.0?</h2>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}