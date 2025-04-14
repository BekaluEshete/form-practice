// components/Input.js
import React from 'react';

export default function Input({ id, label, type = 'text', inputRef, error, onChange }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={id} ref={inputRef} onChange={onChange} />
      {error && (
        <div className="control-error">
          <p className="error">{error}</p>
        </div>
      )}
    </div>
  );
}
