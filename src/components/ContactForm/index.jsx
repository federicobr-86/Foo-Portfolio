import React, { useState } from "react";
import PropTypes from "prop-types";
import Title from "../Title";
import SubmitButton from "../Buttons/SubmitButton";

function ContactForm({ title, mailTo, buttonLabel, response }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <section className="contact-page">
        <h2>{response}</h2>
      </section>
    );
  }

  return (
    <>
      <section className="contact-page">
        <Title title={title} />
        <article className="contact-form">
          <form
            action={mailTo}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                required
              />
            </div>
            <SubmitButton label={buttonLabel}></SubmitButton>
          </form>
        </article>
      </section>
    </>
  );
}

ContactForm.propTypes = {
  title: PropTypes.string,
  mailTo: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  response: PropTypes.string,
};

ContactForm.defaultProps = {
  title: "Contact Form",
  buttonLabel: "Submit",
  response: "Thanks for Reaching Us",
};

export default ContactForm;
