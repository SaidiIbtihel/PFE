import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import './Signin.css'
import { Link } from 'react-router-dom';
import Footer from "./Footer";


function Signin() {
    return (
        <div>
            
        <main>
        <Navigation /> 
            <Logo />
            
        <div class="connecter">
    <h1 id='SI'>Connecter vous</h1>

      <div class="colC">
      <div class="C">
        <input type="text" name="username" placeholder="Email" required/>
        <input type="password" name="password" placeholder="Mot de passe" required/>
        <input type="submit" value="Connecter" id='cnct'/>
        <Link  to="/nvCompte"><input type="submit" value="S'inscrire" id='cnct'/></Link>
        </div>
      </div>
      
      <div class="rowC">
            <div class="vlC">
        <span class="vlC-innertext">ou</span>
      </div>

      <div class="colC">
        <Link to ="https://www.facebook.com/" class="fb btnC">
          <i class="fa fa-facebook "></i> Connecter avec votre compte Facebook
         </Link>
        <a href="#" class="twitter btnC">
          <i class="fa fa-twitter fa-fw"></i>Connecter avec votre compte Twitter
        </a>
        <a href="#" class="google btnC"><i class="fa fa-google fa-fw"> </i> Connecter avec votre compte Google+
        </a>
      </div>
</div>       
</div>               
        </main>






        <Footer/>

        </div>
    
        
    )
}

export default Signin
