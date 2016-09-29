import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';
import List from './List';

console.log('hello from react');

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List tiers={this.props.tiers} />
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
