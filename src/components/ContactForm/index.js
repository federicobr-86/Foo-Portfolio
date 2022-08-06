import React, { useState } from "react";
import Title from "../Title";
import SubmitButton from "../Buttons/SubmitButton";
import text from "../../data/text";

function ContactForm({ mailTo }) {
  const { contact_title, contact_touch, contact_submit, contact_thanks } = text;
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <section className="contact-page">
        <h2>{contact_thanks}</h2>
      </section>
    );
  }

  return (
    <>
      <section className="contact-page">
        <Title title={contact_title} />
        <article className="contact-form">
          <h3>{contact_touch}</h3>
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
              ></textarea>
            </div>
            <SubmitButton text={contact_submit}></SubmitButton>
          </form>
        </article>
      </section>
    </>
  );
}

export default ContactForm;
