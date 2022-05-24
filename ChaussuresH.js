import React from 'react'
import Navigation from '../components/Navigation';
import Footer from "./Footer";
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import espadrille from './Images/espadrille.jpg';
import mocassin from './Images/mocassin.jpg';
import botte from './Images/botte.jpg';



function ChaussuresH() {
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
                      
                    <h2>Espadrilles</h2>
                    <Link to="/espadrilleH" ><img src={espadrille}  /></Link>
                      
                    </div>
                  </div>
                


        
                  <div class="column">
                    <div class="card">
                      
                    <h2> Mocassins </h2>
                    <Link to="/mocassinH " ><img src={mocassin}  /> </Link>
                      
                    </div>
                  </div>
             

            
                  <div class="column">
                    <div class="card">
                      
                    <h2>Bottes </h2>
                    <Link to="/botteH" ><img src={botte}  /> </Link> 
                      
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

export default ChaussuresH
