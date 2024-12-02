import React, { useState } from "react";
import "./formSearch.css";
import "./form.css";


export default function Form({ onSearch }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.firstName &&
      !formData.lastName &&
      !formData.email &&
      !formData.phone &&
      !formData.streetAddress &&
      !formData.city &&
      !formData.state &&
      !formData.zip
    ) {
      setError("Please fill in at least one search field.");
      return;
    }

    setError("");
    onSearch(formData); 
  };

  return (
    <>
      <h1 className="title">choose a Contact</h1>
      <h3 className="subTitle">Search for a Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="left-column">
          <div className="leftInput">
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="leftInput">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit">Search</button>
        </div>

        <div className="right-column">
          <div className="rightSingleImput">
            <div>
              <label htmlFor="streetAddress">Street Address:</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="tripleInput">
            <div>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="zip">Zip Code:</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </>
  );
}
