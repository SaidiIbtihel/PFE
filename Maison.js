import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from "./Footer";
import './Maison.css';

function Maison() {
    return (
        <div>
            <Navigation />
            <Logo />
            <main>
            <div class="pp">
                 <div class="rowE">
                  <div class="columnE">
                    <div class="cardE">  
                    <h2>Meubles</h2>
                    {/* <Link to="/vetementsH" ><img src={MH}  /></Link>    */}
                    </div>
                  </div>
          
        
                  <div class="columnE">
                    <div class="cardE">  
                    <h2>Décorations</h2>
                    {/* <Link to="/vetementsF" ><img src={MF}  /> </Link>    */}
                    </div>
                  </div>
             

            
              </div>
            </div>

            </main>


            <Footer/>
        </div>
    )
}

export default Maison
