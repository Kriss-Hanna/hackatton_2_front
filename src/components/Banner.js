import React from 'react'
import '../App.css'

import Helmet from 'react-helmet';

function Banner() {
    return (
        <>
     <Helmet>    
      <title>MydreamHouse</title>
      <meta name="description" content="Page d'acceuil de MydreamHouse"></meta>
    </Helmet>
        <div className='banner'>            
        </div>
        </>
    )
}

export default Banner
