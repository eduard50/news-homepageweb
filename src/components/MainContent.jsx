import React from "react";


export default function MainContent(){
    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="grid_container">
                    <div className="grid_item main_image">
                        <img src="./src/assets/images/image-web-3-desktop.jpg" alt="main_image"/>
                        <div className="grid_item main_sub">
                        <div className="main_subtitle">
                            <h2>The Bright Future of Web 3.0?</h2>
                        </div>
                        <div className="add_info">
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                            <button id="read_more">READ MORE</button>
                        </div>
                    </div>
                    </div>
                    <div className="grid_item side_info">
                        <h2>New</h2>
                        <div className="side_news">
                            <h3>Hydrogen VS Electric Cars</h3>
                            <p>Will hydrogen-fueled cars ever catch up to EVS?</p>
                        </div>
                        <hr />
                        <div className="side_news">
                            <h3>The Downsides of AI Artistry</h3>
                            <p>What are the possible adverse effects of on-demand AI image generation?</p>
                        </div>
                        <hr />
                        <div className="side_news">
                            <h3>is VC Funding Dring Up?</h3>
                            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}