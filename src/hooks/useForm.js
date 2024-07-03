import { useState } from "react";

export const useForm = (formData) => {
  const [form, setForm] = useState(formData);

  const onChange = (fieldName, value) => {
    setForm({
      ...form,
      [fieldName]: value,
    });
  };

  //   const onChange = (value, campo) => {
  //     setForm({
  //       ...form,
  //       [campo]: value,
  //     });
  //   };

  return {
    ...form,
    formData: form,
    onChange,
  };
};
