import React from 'react';
import $ from 'jquery';
import firebase from 'firebase';

const currentURL = 'http://127.0.0.1:3000'

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
    this.handleSwag(); // Send emails if they got stuff.
                                            // cannot be accidentally create

    let card = {
      number: this.refs.number.value,
      exp_month: this.refs.exp_month.value,
      exp_year: this.refs.exp_year.value
    }
    this.handleStripe(card, this.refs.amount.value * 100);

    let user = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      streetAddress: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.state.value,
      amount: this.refs.amount.value
    }
    console.log("USER ", user);
    firebase.database().ref('donations/').push({
      user: user,
    });

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

  handleSwag() {
    console.log('made it to the handleSwag() function');
    let swagOrdered = {
      shirt: false,
      sticker: false
    }
    if (this.refs.getSticker.checked) { swagOrdered.sticker = true; }
    if (this.refs.getShirt.checked) {
      swagOrdered.shirt = {
        ordered: true,
        size: this.refs.shirtSize.value
      }
    }
    // if nothing is ordered return early.
    console.log(swagOrdered);
    if (!swagOrdered.shirt && !swagOrdered.sticker) { return; }
    // otherwise get address and pass it on to server function.
    swagOrdered.address = {
      name: this.refs.name.value,
      streetAddress: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.zip.value
    };
    let options = {
      type: 'POST',
      data: swagOrdered,
      url: currentURL + '/order',
      success: function () {console.log('success! Emails should be sent'); }
    }
    $.ajax(options);
  },

  validateForm() {
    //TODO have checks that return false if they aren't accurate.
    return true;
  },

  render() {
    return (
      <div id="donation-page-container" className="container">
      <form id="payment-form">
        <span className="payment-errors" />

        <div className="form-group row">
          <label htmlFor="donationAmount" className="col-xs-5 col-form-label">Donation Amount</label>
          <div className="col-xs-6">
            <input type="number" className="form-control" ref="amount" min="1" max="2000" name="quantity" placeholder="$ 0" onChange={this.handleAmountChange} />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="cardNumber" className="col-xs-5 col-form-label">Card Number</label>
          <div className="col-xs-6">
            <input type="text" className="form-control" ref="number" placeholder="XXXX-XXXX-XXXX-XXXX" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="expiration" className="col-xs-5 col-form-label">Expiration</label>
          <div className="col-xs-3">
            <input type="text" className="form-control" ref="exp_month" placeholder="Month" />
          </div>
          <div className="col-xs-3">
            <input type="text" className="form-control" ref="exp_year" placeholder="Year" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="cvc" className="col-xs-5 col-form-label">CVC</label>
          <div className="col-xs-6">
            <input type="text" className="form-control" placeholder="XXX" data-stripe="cvc" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="billigZip" className="col-xs-5 col-form-label">Billing Zip</label>
          <div className="col-xs-6">
            <input type="text" className="form-control" placeholder="XXXXX" data-stripe="address_zip" />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="email" className="col-xs-5 col-form-label">Email Address</label>
            <div className="col-xs-6">
              <input type="text" className="form-control" placeholder="example@email.com" ref="email"/>
            </div>
        </div>

        <div className="form-group row">
          <div className="col-xs-1">
            <input type="checkbox" value="signUpForEmailList" />
          </div>
            <span className="col-xs-10 col-form-label">Would you like to sign up for our newsletter?</span>
        </div>
        {this.state.showSticker ?
          <div className="form-group row">
            <div className="col-xs-1">
              <input type="checkbox" value="getSticker" ref="getSticker" onChange={this.handleCheckBoxChange} />
            </div>
            <span className="col-xs-10 col-form-label">Would you like to receive an Operation Spark sticker?</span>
          </div>
        : null }

        {this.state.showShirt ?
          <div className="form-group row">
            <div className="col-xs-1">
              <input type="checkbox" value="getShirt" ref="getShirt" onChange={this.handleCheckBoxChange} />
            </div>
            <span className="col-xs-10 col-form-label">Would you like to receive an Operation Spark T-Shirt?</span>
            <br />
            <span className="col-xs-3">Shirt Size</span>
            <select name="shirtSize" ref="shirtSize">
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="xlarge">XL</option>
              <option value="xxlarge">XXL</option>
            </select>
          </div>
        : null }

        {this.state.showAddressField ?
          <div className="shippingInfo">
            <h4>Shipping Information</h4>
            <div className="form-group row">
              <label htmlFor="name" className="col-xs-5 col-form-label">Name</label>
                <div className="col-xs-6">
                <input type="text" className="form-control" id="name" ref="name" placeholder="Name Surname"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="address" className="col-xs-5 col-form-label">Street Address</label>
                <div className="col-xs-6">
                <input type="text" className="form-control" id="streetAddress" ref="address" placeholder="Address" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="city" className="col-xs-5 col-form-label">City</label>
              <div className="col-xs-6">
                <input type="text" className="form-control" id="city" ref="city" placeholder="City" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="stateZip" className="col-xs-5 col-form-label">State and Zip Code</label>
              <div className="col-xs-3">
                <input type="text" className="form-control" id="state" ref="state" placeholder="State" />
              </div>
              <div className="col-xs-3">
                <input type="text" className="form-control" id="zip" ref="zip" placeholder="Zip Code" />
              </div>
            </div>
          </div> : null }
        <input type="button"
          className="submit btn btn-warning"
          value="Submit Payment"
          disabled={this.state.buttonDisabled}
          onClick={this.handleSubmit} />
      </form>
      </div>
    );
  },
});

module.exports = PaymentForm;
