import {useState} from 'react';

export const formData = (values) => {
  const [formValues, setFormValues] = useState({
    ...values,
  });

  const handleFormChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  return [formValues, handleFormChange, setFormValues];
};
