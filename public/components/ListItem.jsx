import React from 'react';

class ListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      description: null,
    };
  }

  activate() {
    this.setState({
      active: !this.state.active,
      description: this.state.active ? this.props.tier.description : null,
    });
  }

  render() {
    return (
      <li className="tier" onClick={() => this.activate()}>
        <div className="tier-name">{this.props.tier.name}</div>
        <div className="tier-amount">Amount: {this.props.tier.amount}</div>
        <div className="tier-description">{this.state.description}</div>
      </li>
    );
  }
}

export default ListItem;
