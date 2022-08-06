import React from "react";

const ContactForm = ({ titleText, submitText }) => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>{titleText}</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
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
