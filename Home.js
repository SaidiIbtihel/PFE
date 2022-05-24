import{Link} from "react-router-dom"
import React from 'react';
import v from './Images/v.jpg';
import c from './Images/c.jpg';
import e from './Images/e.jpg';
import b from './Images/b.jpg';
import a from './Images/a.jpg';
import m from './Images/m.jpg';
import ccc from './Images/ccc.webp';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "./Footer";
import './Home.css' ;
import '../App.css';

const Home = () => {
    return (
        <div className="home">
            <Navigation /> 
            <Logo />
          
            <div class="chercher">
            <form> 
              <i class="fa fa-search"/>
              <input type="text" name="text" class="search" placeholder="Chercher un produit"></input>
              <input type="submit" name="submit" class="submit" value="Chercher"></input>
            </form>  
        </div>

        <main>

        
        <div class="p">
         <div class="pp">
         <img src={ccc} alt="electronique" /> 
         <div class="text-block">
          <p>Vous voulez faire  </p>
          <p>des tri dans vos </p>
          <p> placards </p>
          <Link to ="/CommentCaMarche" class="decouvrir"> Découvrir comment ça marche</Link>
          </div>
      </div> 
      <h4 class="p1">Notre site est un site de don et de vente en ligne sur toute la Tunisie, 
            il permet de mettre en relation les clients et les vendeurs dans le but de réaliser 
            de très bonnes affaires et pour aider les gents. Chez nous, vous trouver n’importe 
            quel article et bénéficierez toujours les prix les plus bas, parmi nos produits. 
            Nous permettons l'achat, la vente et le don en ligne de manière simple et pratique.
            Nous assurons des transactions sécurisées et fiables. Aussi, nous simplifions le contact entre les donneurs et les associations.
            </h4> 
 
                <div class="row">
                  <div class="column">
                    <div class="card">
                      
                    <h2>Vetements</h2>
                     <Link to="/vetements" ><img src={v}  /> </Link>
                      
                    </div>
                  </div>
                


        
                  <div class="column">
                    <div class="card">   
                    <h2>Chaussures</h2>
                    <Link to ="/chaussures"> <img src={c}  /> </Link>
                      
                    </div>
                  </div>
             

            
                  <div class="column">
                    <div class="card">
                      
                    <h2>Accessoires</h2>
                    <Link to ="/accessoires" ><img src={a}  /> </Link>
                      
                    </div>
                  </div>
              </div>

                  <div class="row">
                  <div class="column">
                    <div class="card">
                      
                    <h2>Beauté</h2>
                    <Link to ="/beaute" ><img src={b}  /> </Link>
                      
                    </div>
                  </div>
              
                
            
                  <div class="column">
                    <div class="card">
                    <h2>Electroniques</h2>
                    <Link to ="/electroniques" ><img src={e} alt="electronique" /> </Link>
                    </div>
                  </div>
                

                <div class="column">
                    <div class="card">
                      
                    <h2>Maison</h2>
                    <Link to ="/maison" ><img src={m} alt="maison" /></Link> 
                    
                    </div>
                  </div>
                </div>
                </div> 
        </main>

      <Footer/>
      
        </div>
    );
};

export default Home;