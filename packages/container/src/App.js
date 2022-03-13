import React, { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import progressBar from "./components/Progressbar";
const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

export default () => {
    const [isSignedIn, setisSignedIn] = useState(false);
    console.log(process.env.NODE_ENV);
    return (
        <div>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header onSignOut={() => { setisSignedIn(false) }} isSignedIn={isSignedIn} />
                        <Suspense fallback={<progressBar />}>
                            <Switch>
                                <Route path="/auth">
                                    <AuthLazy onSignIn={() => { setisSignedIn(true) }} />
                                </Route >
                                <Route path="/" component={MarketingLazy} />
                            </Switch>
                        </Suspense>
                    </div>
                </StylesProvider>
            </BrowserRouter>
        </div >

    )
}