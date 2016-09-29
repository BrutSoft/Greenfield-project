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
      <li class="tier" onClick={() => this.activate()}>
        <div class="tier-name">{this.props.tier.name}</div>
        <div class="tier-amount">Amount: {this.props.tier.amount}</div>
        <div class="tier-description">{this.state.description}</div>
      </li>
    );
  }
}

export default ListItem;
