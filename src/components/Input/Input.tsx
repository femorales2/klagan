import React, { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ type = 'text', ...props }: IInput) => {
  return <input {...props} type={type} />;
};

export default Input;
