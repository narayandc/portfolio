import React from 'react';

const TextArea = ({ placeholder, name, value, onChange, required }) => {
  return (
    <div>
      <textarea
        required={required}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        style={{ resize: 'none' }}
      />
    </div>
  );
};

export default TextArea;