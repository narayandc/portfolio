import React from 'react';

const TextInput = ({ placeholder, name, value, onChange, type, required }) => {
  return (
    <input
    required={required}
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
  );
};

export default TextInput;
