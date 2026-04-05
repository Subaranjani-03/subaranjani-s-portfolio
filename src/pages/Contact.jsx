import React, { useRef } from "react";
import "./Contact.css";
import SocialIcons from "../components/SocialIcons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jvzo02l",
        "template_7uatwh8",
        form.current,
        "PRTTA8EpFAVs3-lRW"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="contact">
        <div className="contact-right">
          <h1>Get In Touch</h1>

          <SocialIcons />

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-content">

              <div className="form-input">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. suba"
                  required
                />
              </div>

              <div className="form-input">
                <label>E-Mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. abc@gmail.com"
                  required
                />
              </div>

              <div className="form-input">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-input">
                <label>Your Message</label>
                <textarea
                  name="message"
                  placeholder="Leave Your Message"
                  required
                ></textarea>
              </div>

            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;