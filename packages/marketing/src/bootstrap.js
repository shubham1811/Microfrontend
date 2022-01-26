import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

const mount = (el) => {
    const element = <App />;
    ReactDOM.render(
        element,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing_dev_project');
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount }