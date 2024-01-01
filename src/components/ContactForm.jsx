import React, { useState, useRef } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Text from './Text';
import sendEmail from '../utils/helper';

const ContactForm = (props) => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSend = (e) => {
    e.preventDefault();
    try {
      sendEmail(form.current);
      setFormData({
        fullName: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setError(true)
    } finally {
      setSuccess(true)
    }
  };

  return (
    <div className='contact-form'>
      <Text styles='contact'>Contact</Text>
      <div className='notification-box'>
        {success && (
          <Text styles='success'>Email sent Successfully!</Text>
        )}
        {error && (
          <Text styles='error'>Email sent Failed!</Text>
        )}
      </div>
    

      <form ref={form} onSubmit={onSend}>
        <TextInput
          placeholder='Full Name'
          name='fullName'
          type='text'
          value={formData.fullName}
          onChange={handleChange}
          required={true}
        />
        <TextInput
          placeholder='Email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <TextArea
          placeholder='Your Message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required={true}
        />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
