import React from "react";

function NavBar(){
    return(
        <React.Fragment>
            <header>
               <div className="wrapper container_header">
                    <h1>W.</h1>
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">New</a></li>
                                <li><a href="#">Popular</a></li>
                                <li><a href="#">Trending</a></li>
                                <li><a href="#">Categories</a></li>
                            </ul>
                    </nav>
               </div>
            </header>
        </React.Fragment>
    )
}

export default NavBar