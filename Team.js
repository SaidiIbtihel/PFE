import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import team from './Images/team.jpg';
import Footer from "./Footer";
import './Team.css';
  
const Team =() => {
  return (
    <div>
           
           <Navigation /> 
            <Logo />
            



             <main>
             <h1>L’équipe dirigeante de notre site</h1>
                <img src={team}/>
               
                <div class="row">
                  <div class="column">
                    <div class="card">
                      {/* <img src={} alt="" /> */}
                      <div class="team">
                        <h2>Nom et prenom</h2>
                        <p class="title">Co-fondateurs</p>
                        <p>aaa@gmail.com</p>
                        
                      </div>
                    </div>
                  </div>

                  <div class="column">
                    <div class="card">
                      {/* <img src={} alt="" /> */}
                      <div class="team">
                        <h2>Nom et prenom</h2>
                        <p class="title">PDG</p>
                        <p>aaa@hotmail.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="column">
                    <div class="card">
                      {/* <img src={} alt="" /> */}
                      <div class="team">
                        <h2>Nom et prenom</h2>
                        <p class="title">DG</p>
                        <p>aaa@yahoo.fr</p>
                      </div>
                    </div>
                  </div>
                </div>
</main>

<Footer/>



    </div>
  );
};
  
export default Team;