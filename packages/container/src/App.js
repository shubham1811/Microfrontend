import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    console.log("Shubham.kumatr");
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Header />
                    <MarketingApp />
                </BrowserRouter>
            </StylesProvider>

        </div >

    )
}