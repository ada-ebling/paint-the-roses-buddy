import { useState } from 'react';
import styles from './LogicGrid.module.css';

const BUTTON_STATES = ['unchecked', 'crossed', 'checked'];

export function LogicGrid({ elements }) {
  const [buttonStates, setButtonStates] = useState(Array.from(elements, () => Array.from(elements, () => BUTTON_STATES[0])));

  const nextButtonState = (currentButtonState) => {
    const index = BUTTON_STATES.findIndex((el) => currentButtonState === el);
    return index >= 2 ? BUTTON_STATES[0] : BUTTON_STATES[index + 1];
  };

  const buttonStateUpdate = (firstCoord, secondCoord, currentButtonState) => {
    return (prevState) => {
      prevState[firstCoord][secondCoord] = nextButtonState(currentButtonState);
      return [...prevState];
    }
  }

  const getOnClickFn = (firstCoord, secondCoord, currentButtonState) => {
    return () => setButtonStates(buttonStateUpdate(firstCoord, secondCoord, currentButtonState));
  }

  const getCurrentButtonState = (firstCoord, secondCoord) => {
    return buttonStates[firstCoord][secondCoord];
  }

  return (<table>
    <thead>
      <tr>
        <td></td>
        {elements.map(element => <td key={element.concat('label-row')}>{element}</td>)}
      </tr>
    </thead>
    <tbody>
      {elements.map((element, elementIndex) => {
        return (<tr key={element.concat('content row')}>
          <td>{element}</td>
          {Array.from(Array(elements.length - elementIndex), (_el, idx) => {
            const currentButtonState = getCurrentButtonState(elementIndex, idx);
            return <td key={element.concat(elements[idx])}>
              <button
                className={`${styles.checkboxButton} ${styles[currentButtonState]}`}
                onClick={getOnClickFn(elementIndex, idx, currentButtonState)}
              />
            </td>
          })}
        </tr>)
      })}
    </tbody>
  </table>);
}
