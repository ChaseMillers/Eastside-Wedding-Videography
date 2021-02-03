import React, { useState, useEffect, Fragment } from 'react';
import "./Contact.css" 
import Layout from "../Layout/Layout"
import FadeIn from 'react-fade-in';
import emailjs from 'emailjs-com';

const Contacts = () => {

    const Contact = (props) => {
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
            phone: '',
            pack: props && props.location.state && props.location.state.hasOwnProperty('package') ? props.location.state.package :''
        });
        let {
            name = data.name,
            email = data.email,
            how = data.how,
            location = data.location,
            message = data.message,
            phone = data.phone,
            pack = data.package
        } = data;

        const handleChange = name => event => {
            setData({ ...data, [name]: event.target.value });
        };
       
        const handleSubmit = e => {
            e.preventDefault();
            setData({ loading: true });
            emailjs.sendForm('service_64c5hea', 'template_5x0huzs', e.target, 'user_2w4D0pgWVqCvDEaiZHJN7')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

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
                <label htmlFor="name">Name<span className="optional">*</span></label>
                <input
                    className="contact-input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange("name")}
                    required
                />
                <label htmlFor="email">Email<span className="optional">*</span></label>
                <input
                    className="contact-input"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange("email")}
                    required
                />
                <label htmlFor="email">Phone </label>
                <input
                    className="contact-input"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange("phone")}
                />
                <label htmlFor="how">How did you hear about us?</label>
                <input
                    className="contact-input"
                    type="text"
                    value={how}
                    name="how"
                    onChange={handleChange("how")}
                />
                <label htmlFor="location">Venue/Locations<span className="optional">*</span></label>
                <input
                    className="contact-input"
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleChange("location")}
                    required
                />
                <label htmlFor="how">Which Package?<span className="optional">*</span></label>
                       <select
                        name="pack"
                        className="contact-input package"
                        onChange={handleChange("pack")}
                        value={pack}
                        required>
                        <option value="" style={{ display: "none" }}> -- Select an option -- </option>
                    <option value="Gold Package">Gold Package</option>
                    <option value="Platinum Package">Platinum Package</option>
                    <option value="Silver Package">Silver Package</option>
                    </select>
                
                <label htmlFor="message">Tell us about your event </label>
                <textarea
                    className="contact-input tell-us"
                    type="textarea"
                    name="message"
                    value={message}
                    onChange={handleChange("message")}
                />
                
                <button type="submit">Send</button>
            </form>
        );
        return (
            <Fragment>
                <h3 className="contact-header">
                    Questions? <br />
            Want to reserve a date? <br />
            Contact Us! <br />
                </h3>
                {form(data.showForm)}
                {showLoading(data.loading)}
                {showSuccess(data.success)}
            </Fragment>
        );
    }

    const ContactPage = (props) => (
        <Layout>
            <FadeIn>
                <div className="contact-container">
                    <div className="contact-img">
                        <img
                            src="/photos/contactPhoto.jpg"
                            alt="signing table"
                        />
                    </div>
                    <h1>Contact</h1>
                    <div className="contact-Letter">
                        {Contact(props)}
                    </div>
                    <div className="comp-info">
                        <a href="tel:+4252138204" rel="noopener noreferrer">
                            (425) 213-8204</a>
                        <br />
                        <a href="mailto:eastsideweddingvideo@gmail.com"
                            rel="noopener noreferrer"
                            target="_blank">eastsideweddingvideo@gmail.com</a>
                    </div>
                </div>
            </FadeIn>
        </Layout>
    );

    return {
        Contact,
        ContactPage
    }
}
export default Contacts;
