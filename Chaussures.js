import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import CF from './Images/CF.jpg'
import CH from './Images/CH.jpg'
import CE from './Images/CE.jpg'
import { Link } from 'react-router-dom';
import Footer from "./Footer";

import './Chaussures.css';

function Chaussures() {
    return (
        <div>
            <Navigation />
            <Logo />
            
           

        <main>
        <div class="p">
        <div class="pp">
        <div class="row">
                  <div class="columnC">
                    <div class="cardC">
                      
                    <h2>Homme</h2>
                    <Link to="/ChaussuresH" > <img src={CH}  /></Link> 
                      
                    </div>
                  </div>
                


        
                  <div class="columnC">
                    <div class="cardC">
                      
                    <h2>Femme</h2>
                    <Link to="/ChaussuresF" ><img src={CF}  /></Link> 
                      
                    </div>
                  </div>
             

            
                  <div class="columnC">
                    <div class="cardC">
                      
                    <h2>Enfant</h2>
                    <Link to="/ChaussuresE" ><img src={CE}  />  </Link>
                      
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

export default Chaussures
