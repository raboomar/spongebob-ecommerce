import React from "react";
import "./payment.css";
const PaymentForm = () => {
  return (
    <div>
      <div>
        <form className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber" className="card-label">
              Full Name:
            </label>
            <input
              required
              type="text"
              onPaste={(e) => e.preventDefault()}
              name="name"
              className="billing-input"
            />

            <label htmlFor="cardNumber" className="card-label">
              Card Number:
            </label>
            <input
              required
              type="tel"
              pattern="[0-9\s]{13,19}"
              inputMode="numeric"
              // onChange={this.validateInput}
              // value={this.state.number}
              // onKeyDown={this.removeSpecial}
              onPaste={(e) => e.preventDefault()}
              // onKeyPress={this.addSpace}
              // onFocus={this.handleInputFocus}
              name="number"
              maxLength="19"
              autoComplete="cc-number"
              placeholder="xxxx xxxx xxxx xxxx"
              id="cardNumber"
              className="billing-input"
            />
          </div>

          <div>
            <div className="date-cvv-box">
              <div className="cc-month">
                <label htmlFor="cardMonth">Expiration Month:</label>
                <select
                  required
                  id="cardMonth"
                  data-ref="cardDate"
                  // value={this.state.expiry}
                  name="expiry"
                  // onChange={this.handleInputChange}
                  // onFocus={this.handleInputFocus}
                >
                  <option value="" defaultChecked="true">
                    Month
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="cc-year">
                <label htmlFor="cardMonth">Expiration Year:</label>
                <select
                  required
                  id="cardYear"
                  data-ref="cardDate"
                  // value={this.state.expiryyear}
                  name="expiryyear"
                  // onChange={this.handleInputChange}
                  // onFocus={this.handleInputFocus}
                >
                  <option>Year</option>

                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                </select>
              </div>

              <div className="cc-cvv">
                <label htmlFor="cvv">CVV:</label>
                <input
                  required
                  className="cvv-input"
                  type="tel"
                  // onChange={this.validateInput}
                  // onKeyDown={this.removeSpecial}
                  // onPaste={(e) => e.preventDefault()}
                  // onFocus={this.handleInputFocus}
                  name="cvc"
                  id="cvv"
                  // value={this.state.cvc}

                  maxLength="4"
                />
              </div>
            </div>
          </div>
          <div className="payment-btn-container">
            <button
              className="payment-submit-btn"
              // onClick={this.submit}
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
