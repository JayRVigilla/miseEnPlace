import React, {useState} from "react";
import "./Contact.css";
/**
 * Standard Contact Component
 *  DEPENDENT upon EmailJS
 */

function Contact() {
  const INITIAL_FORM_STATE = { name: '', email:'', phone:'', comment:''}
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)

  /**
   * @MISE@ client EmailJS credentials
   * Place userID in index.html script
   **/

  const serviceID = "";
  const templateId = "";
  const userID = "";

  function handleSubmit(evt) {
    evt.preventDefault();
    sendContactReq(templateId, formData)
    setFormData(INITIAL_FORM_STATE);
  }

  function sendContactReq (templateId, variables) {
    window.emailjs.send(serviceID, templateId, variables, userID)
      .then( res => {
        console.log('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('@ SOUS @\nUmm... I think it was the\n', err))
    }


  function handleChange(evt){
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <div className="Contact">
      <h1>Contact</h1>
      <h2>Send me an email</h2>
      <form className="contact-form" onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            placeholder="name"
            size="35"
            value={formData.name}
            onChange={handleChange}
            />

        <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            size="35"
            value={formData.email}
            onChange={handleChange}
            />

        <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="phone"
            size="35"
            value={formData.phone}
            onChange={handleChange}
          />

        <label htmlFor="comment">Comment</label>
          <textarea
            type="text"
            name="comment"
            placeholder="comment"
            cols="30"
            rows="10"
            value={formData.comment}
            onChange={handleChange}
            />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
