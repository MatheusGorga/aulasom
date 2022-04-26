import "./styles.css";

export const InputText = ({ serchValue, handleChange }) => {
  return (
    <>
      <label>
        <input
          type="search"
          placeholder="Pesquise"
          value={serchValue}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default InputText;
