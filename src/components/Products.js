import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'react-router-dom'

function Home() {
    return (

        <div>
            <Helmet>
                <title>Maison insolite</title>
                <link rel="canonical" href=""></link>
                <meta name="immobiliers alternatif" content="Vous allez découvrir des logements qui sortent de l'ordinaire !"></meta>
            </Helmet>
            <video autoplay loop muted>
        	    <source src="https://www.youtube.com/watch?v=M4wMzgwW" type="video/mp4" />
            </video>
            <div className="found">
            <h1> Nos categories</h1>
            </div>
            <div className="category">
            
            <Link to ='/products/mobilier'>
            <div className="field-card">
                <p> Toutes nos produits </p>
           </div> 
           </Link>
           
            <Link to='/products/Yourte' ><div className="field-card"> <p> Yourte </p> 
            </div>
            </Link>            
            <Link to='/products/Tiny'>
            <div className="field-card">
            <p> Tiny House </p>     
            </div>
            </Link>
            <Link to='/products/Kerterre' >
            <div className="field-card">
            <p> Kerterre </p>
            </div>
            </Link>
            <Link to='/products/Cabane'>
            <div className="field-card">
            <p> Cabane</p>
            </div>
            </Link>
            <Link to='/products/Troglodyte'>
            <div className="field-card">
            <p> Troglodytes </p>
            </div>
            </Link>
            </div>
        </div>
        
    )
}

export default Home;
