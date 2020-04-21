import React, { useState, useEffect, Fragment } from 'react';
import { API } from "../config"
import "./Contact.css" 
import Layout from "../Layout/Layout"

const Contacts = () =>{

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const [data, setData] = useState({
    loading: false,
    success: false,
    showForm: true,
    name: '',
    email: '',
    how: '',
    location: '',
    message: '',
    phone:''
  });
  let {
    name = data.name,
    email = data.email,
    how = data.how,
    location = data.location,
    message = data.message,
    phone = data.phone
  } = data;

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setData({ loading: true });
    const response = await fetch(`${API}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contact: data }),
    })

    setData({ success: true });
  };

  const showLoading = loading => (
  loading && <h2 className="loading">Sending...</h2>
  );
 
  const showSuccess = success => (
    success && <div className="success">
      <h3>Thanks For Contacting Us!</h3>
      <p>We will get back to you as soon as we can! 
      You should recieve an email from us shortly.</p>
    </div>
  );

  const form = showForm => (
  showForm && <form onSubmit={handleSubmit}>
    <label for="name">Name<span className="optional">*</span></label>
      <input
        className="contact-input"
        type="text"
        name="name"
        value={name}
        onChange={handleChange("name")}
        required
      />
    <label for="email">Email<span className="optional">*</span></label>
      <input
        className="contact-input"
        type="text"
        name="email"
        value={email}
        onChange={handleChange("email")}
        required
      />
      <label for="email">Phone </label>
      <input
        className="contact-input"
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange("phone")}
      />
    <label for="how">How did you hear about us?<span className="optional">*</span></label>
      <input
        className="contact-input"
        type="text"
        value={how}
        name="how"
        onChange={handleChange("how")}
        required
      />
    <label for="location">Venue/Locations<span className="optional">*</span></label>
    <input
      className="contact-input"
      type="text"
      name="location"
      value={location}
      onChange={handleChange("location")}
      required
    />
    <label for="message">Tell us about your event </label>
      <textarea
        className="contact-input tell-us"
        type="textarea"
        name="message"
        value={message}
        onChange={handleChange("message")}
      />
      <button type="submit">Submit</button>
    </form>
  );
    return (
      <Fragment>
        <div className="comp-info" id="contact-anchor">
          <a href="tel:+4252138204">(425) 213-8204</a>
          <br/>
          <a href="mailto:eastsideweddingvideo@gmail.com" 
          target="_blank">eastsideweddingvideo@gmail.com</a>
        </div>
          <h3 className="contact-header">
            Questions? <br/> 
            Want to Reserve a date? <br/>
            Contact Us! <br/>
          </h3>
        {form(data.showForm)}
        {showLoading(data.loading)}
        {showSuccess(data.success)}
      </Fragment>
    );
}

const ContactPage = () =>(
  <Layout>
    <div className="contact-container">
      <h1>Contact</h1>
      {Contact()}
    </div>
  </Layout>
);

return{
  Contact,
  ContactPage
}
}
export default Contacts;