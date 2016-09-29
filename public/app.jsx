import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';

console.log('hello from react');

class App extends React.Component {

  render() {
    console.log('Hello from Render');
    return (
      <h1>{this.props.message}</h1>
    );
  }

}

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

ReactDOM.render(<App tiers={tiers} />, document.getElementById('app'));
