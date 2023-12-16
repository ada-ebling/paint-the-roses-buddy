import { render, screen } from '@testing-library/react';
import { AlikeLogicGrid } from './AlikeLogicGrid';
import userEvent from '@testing-library/user-event';

describe('AlikeLogicGrid', () => {
  it('renders enough buttons', () => {
    const elements = ['1', '2', '3', '4'];

    render(<AlikeLogicGrid elements={elements} />);
    const expectedNumber = ((elements.length + 1) * elements.length) / 2;
    expect(screen.queryAllByRole('button').length).toEqual(expectedNumber);
  });

  describe('buttons', () => {
    it('cycles through three classes on click', () => {
      const elements = ['1', '2', '3', '4'];

      render(<AlikeLogicGrid elements={elements} />);
      const firstButton = screen.getAllByRole('button')[0];
      expect(firstButton.className.split(/\s+/)).toContain('unchecked');
      userEvent.click(firstButton);
      expect(firstButton.className.split(/\s+/)).toContain('crossed');
      userEvent.click(firstButton);
      expect(firstButton.className.split(/\s+/)).toContain('checked');
      userEvent.click(firstButton);
      expect(firstButton.className.split(/\s+/)).toContain('unchecked');
    });
  });
});
