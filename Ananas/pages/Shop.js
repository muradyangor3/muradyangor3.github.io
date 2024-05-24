import React from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function Shop(){
    return (
        <div>
            
            
<div class="header">
        <header>
                <div class="bh">
                    <input   class="search" type="search" style={{borderRadius: "25px;"}}/> <i class="fa-solid fa-magnifying-glass" ></i>

                    <button class="deliver">
                        Deliver
                    </button>
                </div>
            <img src="ananas-high-resolution-logo.png" style={{width:"250px",height:"200px"}}></img>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
               
        </header>
                <nav>
                    <div class="button">
                        <Link to="/food" className="nav-link"><button class="navbar-item">     
                            <a  href="#food " >Food</a> 
                            </button>
                        </Link>
                        
                        
                        <button class="navbar-item">
                            <a href="pages/drinks.html">Drinks</a>
                        </button>
                    
                        <button class="navbar-item">
                            <a href="pages/sweets.html">Sweets</a>
                        </button>

                        <button class="navbar-item">
                            <a href="pages/meat.html">Meat</a>
                        </button>

                        <button class="navbar-item" >
                            <a href="pages/vegetables.html">Vegetables</a>
                        </button>
                        
                        <button class="navbar-item" >
                            <a href="pages/dairy.html">Dairy</a>
                        </button>

                        <button class="navbar-item">
                            <a href="pages/fruits.html">Fruits</a>
                        </button>
                    </div>
                </nav>    
    </div>
    <h3 class="gh">Special Offers</h3>
        </div>
    );
}
export default Shop;