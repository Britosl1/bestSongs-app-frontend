import React from 'react';
import { render } from '@testing-library/react';
import AddSongModal from '../../../components/AddSongModal/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const JSON = render(
      <AddSongModal
        onCloseModal={jest.fn()}
        // show
      />,
    );
    expect(JSON).toMatchSnapshot();
  });
});