import React, { useState } from "react";

const FORM_ENDPOINT = "";

const ContactForm = ({
  titleText,
  submitText,
  submitThanks,
  submitResponse,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <>
        <h2>{submitThanks}</h2>
        <div>{submitResponse}</div>
      </>
    );
  }

  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>{titleText}</h3>
          <form
            action={FORM_ENDPOINT}
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
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              {submitText}
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default ContactForm;
