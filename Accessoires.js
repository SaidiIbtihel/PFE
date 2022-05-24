import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import Lunettes from './Images/Lunettes.jpg';
import FB from './Images/FB.jpg';
import sacs from './Images/sacs.jpg';
import Footer from "./Footer";
import './Accessoires.css'
function Accessoires() {
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
                            <h2>Faux bijoux</h2>
                            <Link to="/Fbijoux" > <img src={FB}  /></Link> 
                            </div>
                        </div>
                
                        <div class="column">
                            <div class="card">
                            <h2>Sacs</h2>
                            <Link to="/Sacs" ><img src={sacs}  /></Link>  
                            </div>
                        </div>
             
                        <div class="column">
                            <div class="card">    
                            <h2>Lunettes</h2>
                            <Link to="/Lunettes" ><img src={Lunettes}  />  </Link>
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

export default Accessoires
