import React from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";
import Helmet from 'react-helmet';

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <>
     <Helmet>    
      <title>Mon panier</title>
      <meta name="description" content="Page du panier du site MydreamHouse"></meta>
      <link rel="" href="https://silly-leavitt-399ea8.netlify.app/cart"/>
    </Helmet>
      <div className="success is-primary">
        <div className="title-cart" >
          <h1>Mon panier</h1>
        </div>
      </div>
      <br />
      <div >
        {cartKeys.length ? (
          <div >
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Vider panier
                </button>{" "}
                <button
                  className="button is-success"
                  onClick={props.context.checkout}
                >
                  Commander
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light" className="empty-cart">Votre panier est vide !</div>
          </div>
        )}
      </div>
    </>
  );
};

export default withContext(Cart);