import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Don1 from './Images/Don1.jpg';
import Footer from './Footer';
import './Donner.css'
function Donner() {
    return (
        <div>
           <Navigation />
            <Logo />

            <main>
            <div className='donne'>
            <div class="text-block-donne">
                     <h4>Je donne un article </h4>
                </div>
                    <div class="Don">
                    <img src={Don1} id='don'/>
                    </div>

                    <div class="p">
                   <p> Avant toute chose, il est indispensable que les choses que vous souhaitez donner soient en bon état : 
                    aucune association ne récupère les choses auxquels il manque des pièces, sales ou abîmés. Avant de donner les produits,
                    assurez-vous donc qu’ils soient complets et en bon état.</p>
                    </div>
                    <div class="infoD">


                    <div class="photoD">
                    <h4> Mettre des photo de votre article </h4>
                    <form>

                    <input type="file" id="p1" name="p1"/>
                    <input type="file" id="p2" name="p2"/>
                    <input type="file" id="p3" name="p3"/>

                    </form>
                    </div>



                    <div class="infoCD">
                    <h4> Votre Données </h4>
                        <div class="rowD">
                        <div class="colD-25">
                            <label >E-mail</label>
                        </div>
                        <div class="colD-75">
                            <input type="text" id="email" name="email" placeholder="votre Email.."/>
                        </div>
                        </div>
                        
                        
                        <div class="rowD">
                        <div class="colD-25">
                            <label >Téléphone</label>
                        </div>
                        <div class="colD-75">
                            <input type="text" id="tel" name="tel" placeholder="votre numéro.."/>
                        </div>
                        </div>
                        
                        
                            <div class="rowD">
                        <div class="colD-25">
                            <label >Adresse</label>
                        </div>
                        <div class="colD-75">
                            <input type="text" id="adresse" name="adresse" placeholder="Votre adresse.."/>
                        </div>
                        </div>
                        
                        
                            <div class="rowD">
                        <div class="colD-25">
                            <label >Ville</label>
                        </div>
                        <div class="colD-75">
                            <input type="text" id="ville" name="ville" placeholder="votre ville.."/>
                        </div>
                        </div>
                        
                        
                            <div class="rowD">
                        <div class="colD-25">
                            <label >Code postale</label>
                        </div>
                        <div class="colD-75">
                            <input type="text" id="cp" name="cp" placeholder="votre code postale.."/>
                        </div>
                        </div>
                    </div>

                    <div class="infoAD">
                    <h4> la descreption de l'article</h4>
                        <div class="rowD">
                        <div class="colD-25">
                            <label >Qu'elle est votre article</label>
                        </div>
                        <div class="colD-75">
                            <input type="text"  name="articl" placeholder="Robe, Pantalon,chemise..."/>
                        </div>
                        </div>
                        
                        
                        <div class="rowD">
                        <div class="colD-25">
                            <label >Genre</label>
                        </div>
                        <div class="colD-75">
                            <select >
                            <option value="Femme">Femme</option>
                            <option value="Homme">Homme</option>
                            <option value="Fille">Fille</option>
                            <option value="Garçon">Garçon</option>
                            </select>
                        </div>
                        </div>
                        
                        
                        
                        
                        <div class="rowD">
                        <div class="colD-25">
                            <label >Etat</label>
                        </div>
                        <div class="colD-75">
                            <select  name="etat">
                            <option value="tbe">Très bon état</option>
                            <option value="n">Neuf</option>
                            <option value="cn">Comme Neuf</option>
                            <option value="be"> Bon état</option>
                            </select>
                        </div>
                        </div>
                        <div>
                            <input type="submit" id='env' value="Valider" />
                        </div>	
                    </div>
                    </div>








                 </div>
             </main>
    <Footer/>
</div>
    )
}

export default Donner
