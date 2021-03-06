import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'mar',
});

export default ({ history }) => {
    console.log(process.env.NODE_ENV);
    return (
        <div>
            <Router history={history}>
                <StylesProvider generateClassName={generateClassName}>
                    <Switch>
                        <Route path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </StylesProvider>
            </Router>
        </div >
    )
}