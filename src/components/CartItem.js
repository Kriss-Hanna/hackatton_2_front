import React from "react";
import Helmet from 'react-helmet'

const CartItem = props => {
  const { cartItem, cartKey } = props;

  const { product, amount } = cartItem;
  return (
    <> 
    <Helmet>    
    <title>Carte Item </title>
    <meta name="description" content="Product List"></meta>
  </Helmet>
    <div className=" column">
      <div className="box-media">
        <div className="media-cart">
          <div className="media-left">
           <div className='imageFF'>
              <img
                src={product.images}
                alt={product.shortDesc}
              />
           </div>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>
            <small>{`${amount} in cart`}</small>
          </div>
          <div
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartItem;