import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Title from "../Title";
import SubmitButton from "../Buttons/SubmitButton";

const query = graphql`
  {
    contentfulContactFormTitle {
      contactTitle
    }
    contentfulContactForm {
      formTitle
    }
    contentfulContactResponse {
      contactResponse
    }
    contentfulEmailData {
      endPoint
    }
  }
`;

function ContactForm() {
  const data = useStaticQuery(query);
  const {
    contentfulContactResponse: { contactResponse },
    contentfulContactForm: { formTitle },
    contentfulEmailData: { endPoint },
    contentfulContactFormTitle: { contactTitle },
  } = data;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <section className="contact-page">
        <h2>{contactResponse}</h2>
      </section>
    );
  }

  return (
    <>
      <section className="contact-page">
        <Title title={formTitle} />
        <article className="contact-form">
          <form
            action={endPoint}
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
            <SubmitButton label={contactTitle}></SubmitButton>
          </form>
        </article>
      </section>
    </>
  );
}

export default ContactForm;
