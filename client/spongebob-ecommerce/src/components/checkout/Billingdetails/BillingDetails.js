import React from "react";
import "./billing.css";
const BillingDetails = () => {
  return (
    <form action="submit">
      <label for="fname">First Name</label>
      <input
        className="billing-input"
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label for="lname">Last Name</label>
      <input
        className="billing-input"
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
      </select>
    </form>
  );
};

export default BillingDetails;
