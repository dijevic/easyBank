import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";


import { EasyBank } from './EasyBank';
import './styles/generales.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <EasyBank />

    </Router>,
);

