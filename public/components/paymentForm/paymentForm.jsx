import React from 'react';
import $ from 'jquery';

const currentURL = 'http://127.0.0.1:8080'

const PaymentForm = React.createClass({

  getInitialState() {
    let init = { showSticker: false, showShirt: false, showAddressField: false, buttonDisabled: false };
    // if (this.refs.amount.value >= 10) init.showSticker = true;
    // if (this.refs.amount.value >= 30) init.showShirt = true;
    // TODO change this to work with the passed in prop instead
    return init;
  },

  handleAmountChange(e) {
    console.log(e.target.value);
    if (e.target.value >= 10) {
      this.setState({showSticker: true});
    } else {
      this.setState({showSticker: false, showAddressField: false});
    }
    if (e.target.value >= 30) {
      this.setState({showShirt: true});
    } else {
      this.setState({showShirt: false});
    }

    console.log(this.state);
  },

  handleCheckBoxChange(e) {
    console.log('handleCheckBoxChange called');
    console.log(e.target.value);
    console.log(e.target.checked);
    console.log(this.refs.getSticker.checked);
    if (this.refs.getSticker.checked || this.refs.getShirt.checked){
      this.setState({showAddressField: true})
    } else {
      this.setState({showAddressField: false});
    }
  },

  handleSubmit(e) {
    e.preventDefault;
    console.log('submit');
    //Stop function and throw error if there is a problem with the form.
    if (!this.validateForm()) {return;} //handle error if validateForm return false.

    //this.setState({buttonDisabled: true}); //disables button so multiple charges
                                           // cannot be accidentally created
    let card = {
      number: this.refs.number.value,
      exp_month: this.refs.exp_month.value,
      exp_year: this.refs.exp_year.value
    }
    this.handleStripe(card, this.refs.amount.value * 100);
  },

  handleStripe(card, amount) {
    console.log(card);
    Stripe.card.createToken(card, function (status, response) {
      if (response.error) { //uh oh, there is an error
        this.setState({buttonDisabled: false}); //Let's try again...
        //TODO publish the error somewhere on the page
        //in the meantime
        console.error(status, response);
      } else {//Token was created. whoop whoop.
        //submit the post request for the payment.
        let options = {
          type: 'POST',
          data: {
            amount: amount,
            token: response.id
          },
          url: currentURL + '/payment',
          success: function () {console.log('success!'); }
        };
        console.log('right before ajax', options);
        $.ajax(options);
      }
    })
  },

  validateForm() {
    //TODO have checks that return false if they aren't accurate.
    return true;
  },

  render() {
    return (
      <form id="payment-form">
        <span className="payment-errors" />

        <div className="form-row">
          <label htmlFor>
            <span>Donation Amount</span>
            <input type="number" size="8" ref="amount" onChange={this.handleAmountChange} />
          </label>
        </div>

        <div className="form-row">
          <label htmlFor>
            <span>Card Number</span>
            <input type="text" size="20" ref="number" />
          </label>
        </div>

        <div className="form-row">
          <label htmlFor>
            <span>Expiration (MM/YY)</span>
            <input type="text" size="2" ref="exp_month" />
          </label>
          <span> / </span>
          <input type="text" size="2" ref="exp_year" />
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
        {this.state.showSticker ?
          <div className="form-row">
            <input type="checkbox" value="getSticker" ref="getSticker" onChange={this.handleCheckBoxChange} />
            <span>Would you like to receive an Operation Spark sticker?</span>
          </div>
        : null }

        {this.state.showShirt ?
          <div className="form-row">
            <input type="checkbox" value="getShirt" ref="getShirt" onChange={this.handleCheckBoxChange} />
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
          </div>
        : null }

        {this.state.showAddressField ?
          <div className="shippingInfo">
            <h3>Shipping Information</h3>
            <div className="form-row">
              <label htmlFor>
                <span>Name</span>
                <input type="text" size="30" id="name" />
              </label>
            </div>
            <div className="form-row">
              <label htmlFor>
                <span>Street Address</span>
                <input type="text" size="30" id="streetAddress" />
              </label>
            </div>
            <div className="form-row">
              <label htmlFor>
                <span>City/State</span>
                <input type="text" size="20" id="city" />
                <span> , </span>
                <input type="text" size="2" id="state" />
              </label>
            </div>
            <div className="form-row">
              <label htmlFor>
                <span>Zip Code</span>
                <input type="text" size="5" id="zip" />
              </label>
            </div>
          </div> : null }
        <input type="button"
          className="submit"
          value="Submit Payment"
          disabled={this.state.buttonDisabled}
          onClick={this.handleSubmit} />
      </form>
    );
  },
});

module.exports = PaymentForm;
