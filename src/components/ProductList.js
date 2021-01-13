import React, { useState } from 'react';
import ProductItem from './ProductItem';
import withContext from '../withContext';

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

  console.log(select);
  return (
    <>
      <div className="hero-isprimary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
        <div className="form-button">
          <form>
            <select value={select.name} name="name" onChange={filter}>
              <option value="">Filtre par type</option>
              <option value="Yourte">Yourte</option>
              <option value="Cabane">Cabane</option>
              <option value="Kerterre">Kerterre</option>
              <option value="Troglodyte">Troglodyte</option>
              <option value="Tiny House">Tiny House</option>
            </select>
          </form>
          <form>
            <select value={select.price} name="price" onChange={filter}>
              <option value="">Filtre prix </option>
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
                  filtre.name.includes(select.name) &&
                  filtre.price >= select.price
              )
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
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
