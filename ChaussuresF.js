import React from 'react'
import Navigation from '../components/Navigation';
import Footer from "./Footer";
import Logo from '../components/Logo';
import bottine from './Images/bottine.jpg';
import EspadrillesFemme from './Images/EspadrillesFemme.jpg';
import talonnnnn  from './Images/talonnnnn.jpg';



import { Link } from 'react-router-dom';




function ChaussuresF() {
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
                      
                    <h2>Botte & Bottines</h2>
                    <Link to="/bottine" ><img src={bottine}  /></Link>
                      
                    </div>
                  </div>
                


        
                  <div class="column">
                    <div class="card">
                      
                    <h2>Espadrilles </h2>
                    <Link to="/espadrilleF" ><img src={EspadrillesFemme}  /> </Link>
                      
                    </div>
                  </div>
             

            
                  <div class="column">
                    <div class="card">
                      
                    <h2>Talons</h2>
                    <Link to="/talon" ><img src={talonnnnn}  /> </Link> 
                      
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

export default ChaussuresF
