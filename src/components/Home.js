import React from 'react'
import Helmet from 'react-helmet'



function Home() {
    return (

        <div>
            <Helmet>
                <title>My dream House : Trouvez la maison de vos rêves !</title>
                <link rel="canonical" href="https://silly-leavitt-399ea8.netlify.app/" />
                <meta name="description" content="Vous allez découvrir des logements qui sortent de l'ordinaire !"></meta>
            </Helmet>
            <div className='home'>
            
            
                <h1>Trouvez la maison de vos rêves !</h1>
                <h2>Vous retrouverez une multitude de propositions d'habitations loufoques et déjantées !!!</h2>
                
            </div>
        </div>
    )
}

export default Home;
