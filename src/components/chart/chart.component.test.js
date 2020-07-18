import React from 'react';
import { render } from '../../utils/test-utils';
import { Chart } from './chart.component';

describe('Component: Chart', () => {
  it('should have a title', () => {
    const title = 'Chart title';

    const { getByText } = render(<Chart title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });
});
