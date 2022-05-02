import { fireEvent, render, screen } from '@testing-library/react';
import { PostCard } from './index';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('Test view <PostCard/>', () => {
  test('should render PostCarde correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);

    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();

    expect(screen.getByText(props.body)).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
