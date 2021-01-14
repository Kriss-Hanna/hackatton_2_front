import React from 'react';
import Helmet from 'react-helmet' ;

function Home() {
    return (
        <>
        <Helmet>
        <title>MydreamHouse</title>
        <link rel="canonical" href=""></link>
        <meta name="immobiliers insolite" content="My dream House est un site d'immobilier qui propose plusieurs types logements atypiques!"></meta>
        </Helmet>
        <div className="home-contain">
            <div className="home-text">
                <h1>My Dream House, l'immobilier insolite</h1>
                <h2>Retrouvez ici tous les logements les plus insolites et une liste de produits variés</h2>
            </div>
        </div>
        </>
    )
}

export default Home;
