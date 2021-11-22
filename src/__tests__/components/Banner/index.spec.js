import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../../../components/Banner/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <Banner
        artist="Led"
        image="Image.png"
        onDelete={jest.fn()}
        onUpdate={jest.fn()}
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});