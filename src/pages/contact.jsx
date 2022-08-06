import React from "react";
import ContactForm from "../components/ContactForm";
import text from "../data/text";

const contact = () => {
  const { contact_touch, contact_submit, contact_thanks, contact_followUp } =
    text;

  return (
    <>
      <main>
        <ContactForm
          titleText={contact_touch}
          submitText={contact_submit}
          submitThanks={contact_thanks}
          submitResponse={contact_followUp}
        ></ContactForm>
      </main>
    </>
  );
};

export default contact;
