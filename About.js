import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from "./Footer";
import './about.css';
import routes from "../routes";

const about = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <routes/>

            <main>

                <div class="about-section">
                    <img src={about}/>
                    <h1>About Us Page</h1>
                    <p>Tu ne le portes pas ? 
                       La seconde-main, c’est l’avenir . Sur notre site,
                       tu donne ,vends et changer les vêtements qui ont encore des choses à vivre et tu déniches 
                       des merveilles que tu ne trouves pas en boutique.</p>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default about;