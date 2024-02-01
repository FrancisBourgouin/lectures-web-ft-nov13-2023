import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const initialValues = { city: "" };
  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <h1>Type a city</h1>
      <input
        type="text"
        name="city"
        placeholder="Enter a city name"
        value={formData.city}
        onChange={handleChange}
      />
      <button>Fetch the weather</button>
    </form>
  );
}
