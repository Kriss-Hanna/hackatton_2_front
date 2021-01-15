import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'react-router-dom'

function Products() {
    return (

        <div>
            <Helmet>
                <title>Maison insolite</title>
                <meta name="description" content="Vous allez découvrir des logements qui sortent de l'ordinaire !"></meta>
                <link rel="" href="https://silly-leavitt-399ea8.netlify.app/products"/>
            </Helmet>
            <div className="found">
                <h1> Nos catégories</h1>
            </div>
            <div className="category">
            
            <Link to ='/products/all'>
            <div className="field-card">
                <p> Tous nos produits </p>
           </div> 
           </Link>           
            <Link to='/products/Yourte'><div className="field-card"> <p> Yourte </p> 
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

export default Products;
