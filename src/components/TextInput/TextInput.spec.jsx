import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputText } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<InputText handleChange={fn} searchValue={'testando'} />);
    const input = screen.getByPlaceholderText(/pesquise/i);
    /*   const valor = "testando";
    expect(input.value).toBe(valor); */
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<InputText handleChange={fn} />);

    const input = screen.getByPlaceholderText(/pesquise/i);
    const value = 'o valor';

    userEvent.type(input, value);

    /* expect(input.value).toBe(value); 
    expect(fn).toHaveBeenCalledTimes(value.length);*/
  });

  /* it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<InputText handleChange={fn} />);
    expect(container).toMatchSnapshot();
  }); */
});
