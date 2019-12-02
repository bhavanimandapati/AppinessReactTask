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
import 'react-circular-progressbar/dist/styles.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.scss'
import './scss/formstyles.scss'
// Temp fix for reactstrap
//import './scss/core/_dropdown-menu-right.scss'
import './scss/daterangepicker.scss';

import './scss/_custom.scss';
import 'react-datepicker/dist/react-datepicker.css';

import './scss/animate.scss';

render(
  <Provider store={store}>{Router}</Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
};