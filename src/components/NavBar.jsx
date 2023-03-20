import React, { useRef } from "react";

function NavBar(){
    const navRef = useRef();
    
    const resNavbar = ()=>{
        navRef.current.classList.toggle("active");
    } 
    return(
        <React.Fragment>
            <header>
               <div className="wrapper container_header">
                    <h1>W.</h1>
                        <nav>
                            <ul ref={navRef}>
                                <button className="nav-menu__close-btn" onClick={resNavbar}>
                                    <img src="./src/assets/images/icon-menu-close.svg" alt="menu"/>
                                </button>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">New</a></li>
                                <li><a href="#">Popular</a></li>
                                <li><a href="#">Trending</a></li>
                                <li><a href="#">Categories</a></li>
                            </ul>
                    </nav>
                    <button className="nav-menu__btn" onClick={resNavbar}>
                        <img src="./src/assets/images/menu.svg" alt="menu" />
                    </button>
               </div>
            </header>
        </React.Fragment>
    )
}

export default NavBar