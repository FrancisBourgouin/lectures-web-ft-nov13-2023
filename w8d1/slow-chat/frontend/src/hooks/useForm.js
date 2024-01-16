import { useState } from "react";
import useWow from "./useWow";

export default function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);
  const { sayWow } = useWow();

  const handleChange = (event) => {
    const { value, name } = event.target;

    const updatedFormData = { ...formData };

    if (name === "userId") {
      updatedFormData[name] = Number(value);
    } else {
      updatedFormData[name] = value;
    }

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
    sayWow();

    setFormData(initialValues);
  };

  return { formData, handleChange, handleSubmit };
}
