import React from "react";

export default function Trending(){
    return(
        <div className="wrapper">
            <div className="trending-container">
                <div className="item trending-container__content">
                    <img src="./src/assets/images/image-retro-pcs.jpg" alt="trending-01" />
                    <div className="trending-container__content__text">
                        <h2>01</h2>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="item trending-container__content">
                    <img src="./src/assets/images/image-top-laptops.jpg" alt="trending-02" />
                    <div className="trending-container__content__text">
                        <h2>02</h2>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="item trending-container__content">
                    <img src="./src/assets/images/image-gaming-growth.jpg" alt="trending-03" />
                    <div className="trending-container__content__text">
                        <h2>03</h2>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}