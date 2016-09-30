import React from 'react';
import ReactDOM from 'react-dom';
import PaymentForm from './components/paymentForm/paymentForm'

class PaymentApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <PaymentForm />
    );
  }
}

ReactDOM.render(<PaymentApp />, document.getElementById('paymentapp'));
