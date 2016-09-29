import React from 'react';

class PaymentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    return (
      <form action="/your-charge-code" method="POST" id="payment-form">
        <span className="payment-errors" />

        <div className="form-row">
          <label htmlFor>
            <span>Card Number</span>
            <input type="text" size="20" data-stripe="number" />
          </label>
        </div>

        <div className="form-row">
          <label htmlFor>
            <span>Expiration (MM/YY)</span>
            <input type="text" size="2" data-stripe="exp_month" />
          </label>
          <span> / </span>
          <input type="text" size="2" data-stripe="exp_year" />
        </div>

        <div className="form-row">
          <label htmlFor>
            <span>CVC</span>
            <input type="text" size="4" data-stripe="cvc" />
          </label>
        </div>

        <div className="form-row">
          <label htmlFor>
            <span>Billing Zip</span>
            <input type="text" size="6" data-stripe="address_zip" />
          </label>
        </div>

        <input type="submit" className="submit" value="Submit Payment" />
      </form>
    );
  }
}

module.exports = PaymentForm;
