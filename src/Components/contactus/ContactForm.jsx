import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 bg-bgblue text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col mb-8">
      <h1 className="text-4xl leading-10 font-semibold text-yellow-50 ">
        Contact Us
      </h1>
      <p className="text-offwhite">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7 ">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;