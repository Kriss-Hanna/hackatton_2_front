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
        </div>
    )
}

export default Home;
