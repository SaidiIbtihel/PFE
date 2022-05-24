import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from "./Footer";
import './CommentCaMarche.css';

import comment from'./Images/comment.jpg';

function CommentCaMarche() {
    return (
        <div>
           <Navigation />
            <Logo />
        <main>
        <div class="pp">
            <img className='cmmnt' src={comment} alt="electronique" /> 
            <div class="text-block-marche">
            <h2>Bienvenue dans notre site </h2>
            <p> Découvre comment ça marche !</p>
            </div>
        </div> 










        </main>
        <Footer/>
        </div>
    )
}

export default CommentCaMarche
