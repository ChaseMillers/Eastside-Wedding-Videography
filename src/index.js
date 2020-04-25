import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import ReactGA from 'react-ga'

ReactGA.initialize(process.env.REACT_APP_GOOGLE)
ReactDOM.render(<Routes />, document.getElementById('root'));
