import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
  posts: [
    {
      title: 'title 1',
      body: 'body 1',
      id: 1,
      cover: 'img/img.png',
    },
    {
      title: 'title 2',
      body: 'body 2',
      id: 2,
      cover: 'img/img.png',
    },
    {
      title: 'title 3',
      body: 'body 3',
      id: 3,
      cover: 'img/img.png',
    },
  ],
};

describe('Should view <Posts/>', () => {
  test('Should view posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: props.posts.title })).toHaveLength(3);

    expect(screen.getAllByRole('img', { name: props.posts.cover })).toHaveLength(3);

    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  test('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
