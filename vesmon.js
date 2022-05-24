import React from 'react'
import Navigation from '../components/Navigation';
import Footer from "./Footer";
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import "./vesmon.css"
import V1 from './Images/V1.jpg';
import V2 from './Images/V2.jpg';
import V3 from './Images/V3.jpg';
import V4 from './Images/V4.jpg';
import V5 from './Images/V5.jpg';
import V6 from './Images/V6.jpg';
import V7 from './Images/V7.jpg';
import V8 from './Images/V8.jpg';
import V9 from './Images/V9.jpg';
import V10 from './Images/V10.jpg';
import V11 from './Images/V11.jpg';
import MH1 from './Images/MH1.jpg';
import MH2 from './Images/MH2.jpg';
import MH3 from './Images/MH3.jpg';
import MH4 from './Images/MH4.jpg';
import MH5 from './Images/MH5.jpg';
import MH6 from './Images/MH6.jpg';
import MH7 from './Images/MH7.jpg';
import MH8 from './Images/MH8.jpg';
import MH9 from './Images/MH9.jpg';
import MH10 from './Images/MH10.jpg';
import MH11 from './Images/MH11.jpg';



function vesmon() {
    return (
  
        <div>
            <Navigation />
            <Logo />
            
            <main>
            
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                     <Link to="/vetements" ><img src={V1}  /> </Link>
                      <footer>
                      <h2>Veste</h2>
                          54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                


        
                  <div class="columnVH">
                    <div class="cardVH">   
                    
                    <Link to ="/chaussures"> <img src={V2}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
             

            
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    <Link to ="/accessoires" ><img src={V3}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/beaute" ><img src={V4}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              
                
            
                  <div class="columnVH">
                    <div class="cardVH">
                    
                    <Link to ="/electroniques" ><img src={V5} alt="electronique" /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                    <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                

                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/maison" ><img src={V6} alt="maison" /></Link> 
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                
                <div class="columnVH">
                    <div class="cardVH">
                      
                    
                     <Link to="/vetements" ><img src={V7}  /> </Link>
                       <footer>
                       <h2>Veste</h2>
                       54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                


        
                  <div class="columnVH">
                    <div class="cardVH">
                   
                    <Link to ="/chaussures"> <img src={V8}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
             

            
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/accessoires" ><img src={V9}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/beaute" ><img src={V10}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              
                
            
                  <div class="columnVH">
                    <div class="cardVH">
                    
                    <img src={V11}  /> 
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                

                  <div class="columnVH">
                    <div class="cardVH">
                      
                   
                    <Link to ="/maison" ><img src={MH1} alt="maison" /></Link> 
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/beaute" ><img src={MH2}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              
                
            
                  <div class="columnVH">
                    <div class="cardVH">
                    
                    <img src={V11}  /> 
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                

                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/maison" ><img src={MH3} alt="maison" /></Link> 
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/beaute" ><img src={MH4}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              
                
            
                  <div class="columnVH">
                    <div class="cardVH">
                    
                    <img src={MH5}  /> 
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                

                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/maison" ><img src={MH6} alt="maison" /></Link> 
                    <footer>
                    <h2>Manteau</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
               
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/beaute" ><img src={MH7}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              
                
            
                  <div class="columnVH">
                    <div class="cardVH">
                    
                    <img src={MH8}  /> 
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                

                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/maison" ><img src={MH9} alt="maison" /></Link> 
                    <footer>
                    <h2>Manteau</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
                
                  <div class="columnVH">
                    <div class="cardVH">
                      
                    
                    <Link to ="/beaute" ><img src={MH10}  /> </Link>
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              
                
            
                  <div class="columnVH">
                    <div class="cardVH">
                    
                    <img src={MH11}  /> 
                    <footer>
                    <h2>Veste</h2>
                    54 TND
                          <p><button class="panier">ajouter au panier</button></p>
                      </footer>
                    </div>
                  </div>
              

                  



            </main>
            <Footer/>
        </div>
    )
}



export default vesmon;
