import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from "./App"

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) {
        history.listen(onNavigate)
    }
    const element = <App history={history} />;
    ReactDOM.render(
        element,
        el
    );
    return {
        onParentNavigate({ pathname: nextpathname }) {
            const { pathname } = history.location;
            if (pathname != nextpathname) {
                history.push(nextpathname);
            }
        }
    }
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing_dev_project');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount }