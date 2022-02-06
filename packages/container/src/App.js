import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    console.log(process.env.NODE_ENV);
    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header />
                        <MarketingApp />
                    </div>
                </StylesProvider>
            </BrowserRouter>
        </div >

    )
}