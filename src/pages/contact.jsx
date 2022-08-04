import React from "react";
import text from "../data/text";

const contact = () => {
  const { contact_touch, contact_submit } = text;

  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>{contact_touch}</h3>
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
              {contact_submit}
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default contact;
