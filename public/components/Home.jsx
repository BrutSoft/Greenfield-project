import React from 'react';
import { CardStack, Card } from 'react-cardstack';
import tiers from './tierInfo.js'


const Home = (props) => (
  <div>
    <div className="home-header">
      <h2>Donate</h2>
      <p>We depend on dedicated individuals and organizations to run our programs.</p>
      <p>Check out below to see how your donations can help! </p>
    </div>
    <div className="tiers">
      <CardStack
          height={480}
          width={450}
          background={"#8B51C5"}
          hoverOffset={15}>

          {tiers.map((tier, i) =>
            <Card
              key={i}
              background={tier.background}>
              <TierInfo history={props.history} tier={tier}/>
            </Card>
          )}

      </CardStack>
    </div>
  </div>
);

const TierInfo = React.createClass({

  handleClick: function(e) {
    e.preventDefault;
    this.props.history.push('donation-page');
  },

  render: function () {
    return (
      <div>
        <h1>${this.props.tier.amount}</h1>
        <h2>{this.props.tier.name}</h2>
        <br /><br />
        <p className="tier-desc">{this.props.tier.description}</p>
          <input type="button"
            className="submit btn btn-warning"
            value="Donate!"
            onClick={this.handleClick} />
      </div>
    )
  },

});

module.exports = Home;
