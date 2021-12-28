import ReactDOM from 'react-dom';
import React from 'react';

const firstElement = React.createElement('p', {}, 'This is from React Component');

ReactDOM.render(firstElement, document.getElementById('main'));
