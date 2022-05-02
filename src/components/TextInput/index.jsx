import './styles.css';
import P from 'prop-types';

export const InputText = ({ serchValue, handleChange }) => {
  return (
    <>
      <label>
        <input type="search" placeholder="Pesquise" value={serchValue} onChange={handleChange} />
      </label>
    </>
  );
};

export default InputText;

InputText.propTypes = {
  serchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
