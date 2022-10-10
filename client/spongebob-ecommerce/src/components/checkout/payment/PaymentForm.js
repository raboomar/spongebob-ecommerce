import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveOrder } from "../../../redux/feature/order/orderSlice";
import "./payment.css";
const PaymentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [customerPayment, setCustomerPayment] = useState({
    name: "",
    card: "",
    expirationMonth: "",
    expirationYear: "",
    cvc: "",
  });
  const { card, name, expirationMonth, expirationYear, cvc } = customerPayment;
  const handleInput = (e) => {
    if (e.target.name === "card") {
      formatCC(e);
    } else {
      setCustomerPayment({
        ...customerPayment,
        [e.target.name]: e.target.value,
      });
    }
  };

  const formatCC = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }
    setCustomerPayment({
      ...customerPayment,
      [e.target.name]: spacedNumber,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card && name && expirationMonth && expirationYear && cvc) {
      dispatch(saveOrder(cart));
      navigate("/confirmation");
    }
  };

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
              onChange={(e) => {
                handleInput(e);
              }}
            />

            <label htmlFor="cardNumber" className="card-label">
              Card Number:
            </label>
            <input
              required
              type="tel"
              value={card}
              pattern="[0-9\s]{13,19}"
              inputMode="numeric"
              onChange={(e) => {
                handleInput(e);
              }}
              onPaste={(e) => e.preventDefault()}
              name="card"
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
                  name="expirationMonth"
                  onChange={(e) => {
                    handleInput(e);
                  }}
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
                  name="expirationYear"
                  onChange={(e) => {
                    handleInput(e);
                  }}
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
                  name="cvc"
                  id="cvv"
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  maxLength="4"
                />
              </div>
            </div>
          </div>
          <div className="payment-btn-container">
            <button
              className="payment-submit-btn"
              onClick={(e) => {
                handleSubmit(e);
              }}
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
