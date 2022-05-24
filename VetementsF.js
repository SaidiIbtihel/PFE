import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import {Link} from 'react-router-dom';
import Footer from "./Footer";
import './VetementsF.css';


function VetementsF() {
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
                    <h2>vestes & monteaux</h2>
                    {/* <Link to="/vetementsH" ><img src={MH}  /></Link> */}
                    </div>
                  </div>
            
                  <div class="column">
                    <div class="card">
                    <h2>Pulls & Hoodies</h2>
                    {/* <Link to="/vetementsF" ><img src={MF}  /> </Link> */}
                    </div>
                  </div>
             
                  <div class="column">
                    <div class="card">
                    <h2>Robes</h2>
                    {/* <Link to="/vetementsE" ><img src={ME}  /> </Link>  */}
                    </div>
                  </div>
              </div>
              <div class="row">
                  <div class="column">
                    <div class="card">
                    <h2>Pantalons & jupes</h2>
                    {/* <Link to="/vetementsH" ><img src={MH}  /></Link> */}
                    </div>
                  </div>
                
                  <div class="column">
                    <div class="card">
                    <h2>Ensembles</h2>
                    {/* <Link to="/vetementsF" ><img src={MF}  /> </Link> */}   
                    </div>
                  </div>
            
                  <div class="column">
                    <div class="card">
                    <h2>vetement de sport</h2>
                    {/* <Link to="/vetementsE" ><img src={ME}  /> </Link>  */}  
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

export default VetementsF
