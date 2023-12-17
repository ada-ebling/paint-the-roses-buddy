import { render, screen, within } from '@testing-library/react';
import { LogicGrid } from './LogicGrid';
import userEvent from '@testing-library/user-event';

describe('LogicGrid', () => {
  it('renders enough buttons', () => {
    const elements = ['1', '2', '3', '4'];

    render(<LogicGrid elements={elements} />);
    const expectedNumber = ((elements.length + 1) * elements.length) / 2;
    expect(screen.queryAllByRole('button').length).toEqual(expectedNumber);
  });

  it('renders elements in reverse order vertically (bottom to top)', () => {
    const elements = ['1', '2', '3', '4'];
    render(<LogicGrid elements={elements} />);
    const rows = screen.getAllByRole('row');
    expect(within(rows[1]).getByText('4')).toBeInTheDocument();
    expect(within(rows[2]).getByText('3')).toBeInTheDocument();
    expect(within(rows[3]).getByText('2')).toBeInTheDocument();
    expect(within(rows[4]).getByText('1')).toBeInTheDocument();
  });

  describe('buttons', () => {
    const classesOf = (element) => element.className.split(/\s+/);

    it('cycles through three classes on click', () => {
      const elements = ['1', '2', '3', '4'];

      render(<LogicGrid elements={elements} />);
      const firstButton = screen.getAllByRole('button')[0];
      expect(classesOf(firstButton)).toContain('unchecked');
      userEvent.click(firstButton);
      expect(classesOf(firstButton)).toContain('crossed');
      userEvent.click(firstButton);
      expect(classesOf(firstButton)).toContain('checked');
      userEvent.click(firstButton);
      expect(classesOf(firstButton)).toContain('unchecked');
    });

    it('coordinates buttons independently', () => {
      const elements = ['1', '2', '3', '4'];

      render(<LogicGrid elements={elements} />);
      const buttons = screen.getAllByRole('button');
      const firstButton = buttons[0];
      const secondButton = buttons[1];
      const nextRowButton = buttons[4];

      const validateButtonStatesAs = (firstButtonState, secondButtonState, nextRowButtonState) => {
        expect(classesOf(firstButton)).toContain(firstButtonState);
        expect(classesOf(secondButton)).toContain(secondButtonState);
        expect(classesOf(nextRowButton)).toContain(nextRowButtonState);
      };

      validateButtonStatesAs('unchecked', 'unchecked', 'unchecked');
      userEvent.click(firstButton);
      validateButtonStatesAs('crossed', 'unchecked', 'unchecked');
      userEvent.click(secondButton);
      userEvent.click(secondButton);
      validateButtonStatesAs('crossed', 'checked', 'unchecked');
    });
  });
});
