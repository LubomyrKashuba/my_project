import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';
import { setField } from '../../redux/userActions';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};


function Form() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.contact);

  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({...prev, [name]: value}))
  };

  const validateForm = () => {
    const newErrors = {};

    if (!inputs.firstName.trim())
      newErrors.firstName = 'First Name is required';
    if (!inputs.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!validator.isEmail(inputs.email)) newErrors.email = 'Invalid email';
    if (!inputs.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setField(inputs));
      console.log('Відправлені дані:', inputs);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={inputs.message}
          onChange={handleChange}
        />
        {errors.message && <p>{errors.message}</p>}
      </div>
      <button type="submit">Відправити</button>
    </form>
  );
}

export default Form;
