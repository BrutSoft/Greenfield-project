import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.jsx';
console.log('hello from react');

class HelloWorld extends React.Component {

  render() {
    console.log('Hello from Render');
    return (
      <div>
        <h1>Hello World(REACT)</h1>
        <Layout />
      </div> 
    );
  }
}

ReactDOM.render(<HelloWorld />, app);
