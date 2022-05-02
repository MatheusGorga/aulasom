import { render, screen } from '@testing-library/react';
import Home from './index';

describe('<Home/>', () => {
  test('should render search, posts and load more', async () => {
    render(<Home />);
    /* const noMorePOst = screen.getByText("não existem posts") */
    screen.debug();
  });
});
