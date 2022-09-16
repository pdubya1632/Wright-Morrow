import { useState } from "react";

export const useForm = (callback, initialState = {}) => {

  // Password 
  // Email
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {

    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};