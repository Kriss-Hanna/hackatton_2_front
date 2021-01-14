import React from "react";
import Helmet from 'react-helmet'

const ProductItem = props => {
  const { product } = props;
 
  return (
    <>
    <Helmet>    
      <title>Product Item </title>
      <link rel="canonical" href=""></link>
      <meta name="Product Item" content="Product List"></meta>
    </Helmet>
    <div className=" column ishalf">
      <div className="boxyou">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img className="image"
                src={product.images}
                alt={product.name}
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductItem;