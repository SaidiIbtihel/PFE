import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import SoinP from './Images/SoinP.jpg';
import mqg from './Images/mqg.jpg';
import parfums from './Images/parfums.jpg';
import Footer from "./Footer";
import "./Beaute.css";


import './Beaute.css'
function Beaute() {
    return (
        <div>
            <Navigation />
            <Logo />
            <main>

        <div class="p">
            <div class="pp">
            <div class="row">
                    <div class="column">
                        <div class="card">
                        
                        <h2>Soins </h2>
                        <Link to="/soinP" > <img src={SoinP}  /></Link> 
                        
                        </div>
                    </div>
                    


            
                    <div class="column">
                        <div class="card">
                        
                        <h2>Maquillages</h2>
                        <Link to="/maquillages" ><img src={mqg}  /></Link> 
                        
                        </div>
                    </div>
                

                
                    <div class="column">
                        <div class="card">
                        
                        <h2>Parfums</h2>
                        <Link to="/parfums" ><img src={parfums}  />  </Link>
                        
                        </div>
                        </div>
            </div>
            </div>
        </div>


        </main>
        <Footer/>
        </div>
    )
}

export default Beaute
