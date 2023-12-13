import { render, screen } from '@testing-library/react';
import { AlikeLogicGrid } from './AlikeLogicGrid';

describe('AlikeLogicGrid', () => {
  it('renders enough checkboxes', () => {
    const elements = ['1', '2', '3', '4'];

    render(<AlikeLogicGrid elements={elements} />);
    const expectedNumber = ((elements.length + 1) * elements.length) / 2;
    expect(screen.queryAllByRole('checkbox').length).toEqual(expectedNumber);
  });
});
