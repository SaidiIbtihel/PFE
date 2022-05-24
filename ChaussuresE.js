import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from "./Footer";
import Chaussuresfille from "./Images/Chaussuresfille.jpg"
import Chaussuresgarcon from "./Images/Chaussuresgarcon.jpg"
import { Link } from 'react-router-dom';

function ChaussuresE() {
    return (
        <div>
             <Navigation />
            <Logo />
            
           

        <main>
        <div class="pp">
                 <div class="rowE">
                  <div class="columnE">
                    <div class="cardE">  
                    <h2>Garçons</h2>
                    <Link to="/chaussuresGarcon" ><img src={Chaussuresgarcon}  /></Link>   
                    </div>
                  </div>
          
        
                  <div class="columnE">
                    <div class="cardE">  
                    <h2>Filles</h2>
                    <Link to="/chaussuresFille" ><img src={Chaussuresfille}  /> </Link>   
                    </div>
                  </div>
             

            
              </div>
            </div>


        </main>
        <Footer/>
        </div>
    )
}

export default ChaussuresE
