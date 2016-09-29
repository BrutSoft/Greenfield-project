import React from 'react';
import List from './List';

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

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List tiers={tiers} />
    );
  }

}

// var Home = React.createClass({
//   render: function() {
//     return <p>Home Page</p>
//   }
// });

module.exports = Home;
