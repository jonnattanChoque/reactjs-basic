import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
    <div>
        <h1>404!</h1>
        <h2>N0 existe la página</h2>
        <Link className="button is-info" to="/">
            Volver a la portada
        </Link>
    </div>
);
