import React from 'react';

class PaymentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = null;
  }

  handleAmountChange() {
    console.log('hello');
  }
  render() {
    return (
      <form action="/your-charge-code" method="POST" id="payment-form">
        <span className="payment-errors" />

        <div className="form-row">
          <label htmlFor>
            <span>Donation Amount</span>
            <input type="text" size="8" onChange={this.handleAmountChange} />
          </label>
        </div>

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

        <div className="form-row">
          <label htmlFor>
            <span>Email Address</span>
            <input type="text" size="30" />
          </label>
        </div>

        <div className="form-row">
          <input type="checkbox" value="signUpForEmailList" />
          <span>Would you like to sign up for our newsletter?</span>
        </div>

        <div className="form-row">
          <input type="checkbox" value="getSticker" />
          <span>Would you like to receive an Operation Spark sticker?</span>
          { // TODO this should not appear unless donation Amount
            // is higher than $10(?)
          }
        </div>

        <div className="form-row">
          <input type="checkbox" value="getShirt" />
          <span>Would you like to receive an Operation Spark T-Shirt?</span>
          <br />
          <select name="shirtSize">
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="xlarge">XL</option>
            <option value="xxlarge">XXL</option>
          </select>
          <span>Shirt Size</span>

          { // TODO this should not appear unless donation Amount
            // is higher than $30(?)
          }
        </div>

        <input type="submit" className="submit" value="Submit Payment" />
      </form>
    );
  }
}

module.exports = PaymentForm;
