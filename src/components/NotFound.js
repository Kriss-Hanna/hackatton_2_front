import React from 'react';
import {NavLink} from 'react-router-dom';

function NotFound() {
    return (
        <div className="notfound-content">
            <div className="notfound-text">

                <h1>Erreur page 404</h1>
                <h2>Désolé, cette page n'existe pas.</h2>
                <NavLink exact to ="/">
                    <span className="notfound-link">Retour à l'accueil</span>
                </NavLink>
                
            </div>
        </div>
    )
}

export default NotFound
