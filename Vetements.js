import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import {Link} from 'react-router-dom';
import './Vetements.css'
import MF from './Images/MF.jpg'
import MH from './Images/MH.jpg'
import ME from './Images/ME.jpg'
import Footer from './Footer';
function Vetements() {
    return (
        <div>
            
            <Navigation />
            <Logo />
            
        
          
        <main>
        <div class="p">
       
        <div class="row">
                  <div class="column">
                    <div class="card">
                      
                    <h2>Homme</h2>
                    <Link to="/vetementsH" ><img src={MH}  /></Link>
                      
                    </div>
                  </div>
                


        
                  <div class="column">
                    <div class="card">
                      
                    <h2>Femme</h2>
                    <Link to="/vetementsF" ><img src={MF}  /> </Link>
                      
                    </div>
                  </div>
             

            
                  <div class="column">
                    <div class="card">
                      
                    <h2>Enfant</h2>
                    <Link to="/vetementsE" ><img src={ME}  /> </Link> 
                      
                    </div>
                  </div>
           
            </div>

</div>































        </main>
        <Footer/>
        </div>
    )
}

export default Vetements
