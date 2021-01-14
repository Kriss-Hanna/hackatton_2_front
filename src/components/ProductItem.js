import React from "react";
import Helmet from 'react-helmet'

const ProductItem = props => {
  const { product } = props;
 
  return (
    <>
    <Helmet>    
      <title>Product Item </title>
      <meta name="description" content="Product List"></meta>
    </Helmet>
    <div className=" column ishalf">
      <div className="boxyou">
        <div className="media">
          <div className="media-left">
            
            
              <div className="imageFF">
              <img 
                src={product.images}
                alt={product.name}
              />
               </div>
            
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " en stock"}</small>
            ) : (
              <small className="has-text-danger">Plus de stock !</small>
            )}
            <div className="is-clearfix">
              <button
                className="buut"
                onClick={() =>
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Ajouter au panier
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