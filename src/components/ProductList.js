import React, { useState } from 'react';
import ProductItem from './ProductItem';
import withContext from '../withContext';
import Helmet from 'react-helmet'

import { Link } from 'react-router-dom'

import '../App.css'

const ProductList = (props) => {
  const { products } = props.context;
  const [select, setSelect] = useState({
    name: '',
    price: '',
  });

  const filter = (e) => {
    setSelect({ ...select, [e.target.name]: e.target.value });
  };

  console.log(select.price);
  return (
    <>
    <Helmet>    
      <title>Product List</title>
      <link rel="canonical" href=""></link>
      <meta name="description" content="Product List"></meta>
    </Helmet>
      <div className="hero-is-primary">
        <div className="hero-body container">
          <h1 className="title-habitations">Nos Habitations</h1>
        </div>
        <div className="form-button">          
          <form className="filter">
            <select value={select.price} name="price" onChange={filter}>
              <option  value="">Filtre prix </option>
              <option value="10000">Prix supérieur 10.000 </option>
              <option value="20000">Prix supérieur 20.000 </option>
              <option value="50000">Prix supérieur 50.000</option>
              <option value="70000">Prix supérieur 70.000</option>
              <option value="100000">Prix supérieur 100.000</option>
            </select>
          </form>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products
              .filter(
                (filtre) =>               
                (filtre.price >= select.price) && ( props.match.params.id === "all" || 
                  filtre.name.includes(props.match.params.id)))
              .map((product, index) => (
                <ProductItem
                  product={product}
                  key={index}
                  addToCart={props.context.addToCart}
                />
              ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                Désolé, aucun produit trouvé !
              </span>
            </div>
          )}
        </div>
        <Link to ='/products'>
          <div className="buttona">
        <button className='buttoni'> retour </button> 
        </div></Link>
      </div>
    </>
  );
};

export default withContext(ProductList);
