import React from 'react';
import { render, cleanup } from '../../utils/test-utils';
import { UserCard } from './user-card.component';

describe.skip('Component: UserCard', () => {
  afterEach(cleanup);

  it('should have in document', () => {
    const { getByTestId } = render(<UserCard />);
    expect(getByTestId('user-card')).toBeInTheDocument();
  });

  it('should have a user image', () => {
    const { getByTestId } = render(
      <UserCard
        name="El"
        avatar={`${process.env.PUBLIC_URL}/images/profile/el.jpg`}
        about="Sobre"
      />
    );
    expect(getByTestId('user-card-avatar')).toHaveAttribute('class');
  });
});
