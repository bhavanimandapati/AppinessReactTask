import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Router from './router/router'
import store from './store/store'
// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-material.css";
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.scss'
import './scss/formstyles.scss'
import './scss/_custom.scss';
import './scss/animate.scss';

render(
  <Provider store={store}>{Router}</Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
};