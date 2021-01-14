import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'react-router-dom'

function Home() {
    return (

        <div>
            <Helmet>
                <title>My dream House : Trouvez la maison de vos rêves !</title>
                <link rel="canonical" href="https://silly-leavitt-399ea8.netlify.app/" />
                <meta name="description" content="Vous allez découvrir des logements qui sortent de l'ordinaire !"></meta>
            </Helmet>

            <h1>My dream House : Trouvez la maison de vos rêves !</h1>
            <h2>Vous retrouverez une multitude de propositions d'habitations loufoques et déjantées !!!</h2>
        </div>
    )
}

export default Home;
