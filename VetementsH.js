import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import MH from './Images/MH.jpg';
import MF from './Images/MF.jpg';
import ME from './Images/ME.jpg';


import './VetementsH.css'
function VetementsH() {
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
                      
                    <h2>Vestes & Monteaux</h2>
                    <Link to="/vesmon" ><img src={MH}  /></Link>
                      
                    </div>
                  </div>
                


        
                  <div class="column">
                    <div class="card">
                      
                    <h2>Pantalon </h2>
                    <Link to="/pantalonH " ><img src={MF}  /> </Link>
                      
                    </div>
                  </div>
             

            
                  <div class="column">
                    <div class="card">
                      
                    <h2>chemises & pulls</h2>
                    <Link to="/chempul" ><img src={ME}  /> </Link> 
                      
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

export default VetementsH
