import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello from react');

class HelloWorld extends React.Component {

  render() {
    console.log('Hello from Render');
    return (
      <h1>Hello World(REACT)</h1>
    );
  }

};

ReactDOM.render(<HelloWorld />, app);
