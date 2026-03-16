import React from "react";
import "./Contact.css";
import SocialIcons from "../components/SocialIcons";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact">
        <div className="contact-right">
          <h1>Get In Touch</h1>
          {/* icons */}
          <SocialIcons />
          <form action="">
            <div className="form-content">
              <div className="form-input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g. suba"
                />
              </div>
              <div className="form-input">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g. abc@gmail.com"
                />
              </div>
              <div className="form-input">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="form-input">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Leave Your Message"
                ></textarea>
              </div>
            </div>

            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
