import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './context/context';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './context/store.provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <StoreProvider>
            <ContextProvider>
                <App />
            </ContextProvider>
        </StoreProvider>
    </BrowserRouter>
);



