import React from 'react';
import './ErrorPageNotFound.css';
import Main from '../components/Main';
import { Link } from 'react-router-dom';
import './ErrorPageNotFound.css';

function ErrorPageNotFound() {
    return (
        <div className='pageError'>
            <Main>
                <div className='error-page'>
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <Link to='/' className='accueil'>Retourner sur la page d'accueil</Link>
                </div>
            </Main>
        </div>
    )
}

export default ErrorPageNotFound;