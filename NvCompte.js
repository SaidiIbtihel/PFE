import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from "./Footer";
import './NvCompte.css'

function NvCompte() {
    return (
        <div>
            
         
           
           
            <Navigation />
        <Logo />
            

    <main>
        
        <div class='NC'>
            <div className='inscrire'>
          <h1> S'inscrire</h1>
          <h6>c'est rapide et facile</h6>
            </div>

          <div class="input-inscri">
              <i class="fa fa-user icon"></i>
              <input class="input-field" type="text" placeholder="Nom et Prenom" name="Nom et Prenom"/>
          </div>

          <div class="input-inscri">
              <i class="fa fa-envelope icon"></i>
              <input class="input-field" type="text" placeholder="Email" name="email"/>
          </div>

          <div class="input-inscri">
              <i class="fa fa-key icon"></i>
              <input class="input-field" type="password" placeholder="Mot de passe" name="psw"/>
          </div>

          <div class="input-inscri">
              <i class="fa fa-key icon"></i>
          <input type="password" placeholder="Repeter le mot de passe" name="psw-repeat" id="psw-repeat" required/>    
          </div>


          <button type="submit" class="nc">S'inscrire</button>

          </div>
    </main>






    <Footer/>
            


        </div>
    )
}

export default NvCompte
