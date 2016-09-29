import React from 'react';
import ListItem from './ListItem';

const List = (props) => (
  <div>
    <h2>Donation Tiers</h2>
    <ul>
      {props.tiers.map(tier =>
        <ListItem tier={tier} />
      )}
    </ul>
  </div>
);

export default List;
