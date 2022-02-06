import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

export default () => {
    console.log("Shubham.kumatr");
    return (
        <div>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </div >

    )
}