import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'mar',
});

export default () => {
    console.log(process.env.NODE_ENV);
    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <Switch>
                        <Route path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </StylesProvider>
            </BrowserRouter>
        </div >
    )
}