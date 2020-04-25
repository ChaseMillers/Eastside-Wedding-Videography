import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import ReactGA from 'react-ga'

ReactGA.initialize('UA-155312541-1')
ReactDOM.render(<Routes />, document.getElementById('root'));
