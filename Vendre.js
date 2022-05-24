import React from 'react';
import vente from './Images/vente.webp';
import Footer from './Footer';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import './Vendre.css';

function Vendre() {
    return (
        <div>
            
            <Navigation />
            <Logo />

                <main>
                    <div className='vendre'>
                <div class="text-block-vente">
                     <h4>Je vendre un article </h4>
                </div>
                
                <div class="vente">
                <img src={vente} id="ven"/>
                </div>
                
                <div class="p">
               <p> Vous pouvez vendre tout ce que vous voulez et vous allez recevoir 75% du prix si votre produit est vendu</p>
                </div>
            
                <div class="infov">
                    <div class="photoV">
                    <h4> Mettre des photo de votre article </h4>
                    <form>
                        <input type="file" id="p1" name="p1"/>
                        <input type="file" id="p2" name="p2"/>
                        <input type="file" id="p3" name="p3"/>
                    </form>
                    </div>



                    <div class="infoCV">
                    <h4> Votre Données </h4>
                        <div class="rowV">
                            <div class="colV-25">
                            <label for="email">E-mail</label>
                            </div>
                        <div class="colV-75">
                            <input type="text" id="email" name="email" placeholder="votre Email.."/>
                        </div>
                        </div>
                    
                    
                    <div class="rowV">
                    <div class="colV-25">
                        <label for="tel">Téléphone</label>
                    </div>
                    <div class="colV-75">
                        <input type="text" id="tel" name="tel" placeholder="votre numéro.."/>
                    </div>
                    </div>
                    
                    
                        <div class="row">
                    <div class="colV-25">
                        <label for="adresse">Adresse</label>
                    </div>
                    <div class="colV-75">
                        <input type="text" id="adresse" name="adresse" placeholder="Votre adresse.."/>
                    </div>
                    </div>
                    
                    
                        <div class="rowV">
                    <div class="colV-25">
                        <label for="ville">Ville</label>
                    </div>
                    <div class="colV-75">
                        <input type="text" id="ville" name="ville" placeholder="votre ville.."/>
                    </div>
                    </div>
                    
                    
                        <div class="rowV">
                    <div class="colV-25">
                        <label for="cp">Code postale</label>
                    </div>
                    <div class="colV-75">
                        <input type="text" id="cp" name="cp" placeholder="votre code postale.."/>
                    </div>
                    </div>
                </div>


                <div class="prixV">
                    <div class="rowV">
                    <div class="colV-25">
                        <label for="prix">Votre prix</label>
                    </div>
                    <div class="colV-75">
                        <input type="text" id="prix" name="prix" placeholder="Prix..."/>
                    </div>
                    </div>
                </div>

                <div class="infoAV">
                <h4> la descreption de l'article</h4>
                    <div class="rowV">
                    <div class="colV-25">
                        <label >Qu'elle est votre article</label>
                    </div>
                    <div class="colV-75">
                        <input type="text" id="vtmnt" name="vtmnt" placeholder="Robe, Pantalon,chemise..."/>
                    </div>
                    </div>
                    
                    
                    <div class="rowV">
                    <div class="colV-25">
                        <label for="genre">Genre</label>
                    </div>
                    <div class="colV-75">
                        <select id="genre" name="genre">
                        <option value="Femme">Femme</option>
                        <option value="Homme">Homme</option>
                        <option value="Fille">Fille</option>
                        <option value="Garçon">Garçon</option>
                        </select>
                    </div>
                    </div>
                    
                    
                    
                    
                    <div class="rowV">
                    <div class="colV-25">
                        <label for="etat">Etat</label>
                    </div>
                    <div class="colV-75">
                    <select id="etat" name="etat">
                        <option value="tbe">Très bon état</option>
                        <option value="neuf">Neuf</option>
                        <option value="cn">Comme Neuf</option>
                        <option value="be"> Bon état</option>
                    </select>
                    </div>
                    <div>
                    <input type="submit" id='env' value="Valider" />
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

export default Vendre
