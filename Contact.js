import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from "./Footer";
import "./Contact.css";
import contact from './Images/contact.jpg';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            

        <main>

        <div class="contact">
            <div class="text-block-contact">
             <h4>Contacter nous :</h4>
            </div>
            <img src={contact} id="con"/>
            
            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom" placeholder="votre nom.."/>

            <label for="lname">Adresse mail</label>
            <input type="text" id="email" name="email" placeholder="Votre adresse mail.."/>

            <label >Message</label>
            <textarea id="messages" name="message" placeholder="Laisser votre message.." />
            <input type="submit" id="msg" value="Envoyer"/>
        </div>
                  
            

        </main>
        <Footer/>

        </div>
    );
};

export default Contact;