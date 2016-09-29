import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';

ReactDOM.render(routes, document.getElementById('app'))

const tiers = [
  {
    name: 'Tier 1',
    amount: 10,
    description: 'You get a sticker!',
  },
  {
    name: 'Tier 2',
    amount: 20,
    description: 'You get a shirt!',
  },
];
