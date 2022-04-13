import "./styles.css";

export const InputText = ({ serchValue, handleChange }) => {
  return (
    <>
      <label>
        <input
          type="search"
          placeholder="Search..."
          value={serchValue}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default InputText;
