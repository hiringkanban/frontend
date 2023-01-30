import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Text from './Text';

describe('App', () => {
  it('Render', () => {
    const app = render(<Text>text</Text>);
    expect(app).toMatchSnapshot();
  });
});
