import React from 'react';
import './Contact.css';
import { MdOutlineMail } from 'react-icons/md';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import emailjs  from '@'

function Contact() {

  return (
    <section className="contact section" id="contact">
      <div className="contact-titlebox">
        <h2>Contact Me</h2>
        <h5>Get In Touch</h5>
      </div>

      <div className="contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>svvvs5579@naver.com</h5>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.location = 'mailto:svvvs5579@naver.com';
              }}
            >
              Send a message
            </Link>
          </article>
          <article className="contact-option">
            <FaGithubAlt />
            <h4>Github</h4>
            <h5>llvovll89</h5>
            <a href="https://github.com/llvovll89" target="_black">
              Go to Github
            </a>
          </article>
        </div>
        <form className="contact-form" >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="contact-btn">
            Send MSG
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
