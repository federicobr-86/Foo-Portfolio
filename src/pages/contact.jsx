import React from "react";
import ContactForm from "../components/ContactForm";
import text from "../data/text";

const contact = () => {
  const { contact_touch, contact_submit } = text;

  return (
    <>
      <ContactForm
        titleText={contact_touch}
        submitText={contact_submit}
      ></ContactForm>
    </>
  );
};

export default contact;
