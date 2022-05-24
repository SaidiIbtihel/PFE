import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from "./Footer";
import './Electroniques.css';

function Electroniques() {
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
                      
                    <h2>Gros electroménager</h2>
                    {/* <Link to="/vesmon" ><img src={MH}  /></Link> */}
                      
                    </div>
                  </div>
                


        
                  <div class="column">
                    <div class="card">
                      
                    <h2> Petit electroménager </h2>
                    {/* <Link to="/pantalon " ><img src={MF}  /> </Link> */}
                      
                    </div>
                  </div>
             

            
                  <div class="column">
                    <div class="card">
                      
                    <h2>PC & Téléphones </h2>
                    {/* <Link to="/chempul" ><img src={ME}  /> </Link>  */}
                      
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

export default Electroniques
