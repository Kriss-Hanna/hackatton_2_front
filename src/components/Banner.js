import React from 'react'
import '../App.css'

import Helmet from 'react-helmet';

function Banner() {
    return (
        <>
     <Helmet>    
      <title>MydreamHouse</title>
      <link rel="canonical" href=""></link>
      <meta name="Banner" content="Product List"></meta>
    </Helmet>
        <div className='banner'>            
        </div>
        </>
    )
}

export default Banner
