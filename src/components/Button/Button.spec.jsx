import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './index';

describe('Test Button <button/>', () => {
  test('shoud render the button whit the text ', () => {
    render(<Button text="load more" />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  test('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('should be disabled when disabeld is true', () => {
    render(<Button text="load more" disabled={true} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });
});
