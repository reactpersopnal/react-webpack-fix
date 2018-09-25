import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './App'
import MyComponent from './myComponent'

const renderDom = Component => {
    render(
        <MyComponent/>,
        document.getElementById('app')
    )
}

renderDom(App);
