import { useState } from 'react';
import styles from './AlikeLogicGrid.module.css';

const BUTTON_STATES = ['unchecked', 'crossed', 'checked'];

export function AlikeLogicGrid({ elements }) {
  const [buttonStates, setButtonStates] = useState(Array.from(elements, () => Array.from(elements, () => BUTTON_STATES[0])));

  const nextButtonState = (currentButtonState) => {
    const index = BUTTON_STATES.findIndex((el) => currentButtonState === el);
    return index >= 2 ? BUTTON_STATES[0] : BUTTON_STATES[index + 1];
  };

  const buttonStateUpdate = (firstCoord, secondCoord) => {
    return (prevState) => {
      const currentButtonState = prevState[firstCoord][secondCoord];
      prevState[firstCoord][secondCoord] = nextButtonState(currentButtonState);
      return [...prevState];
    }
  }

  const getCurrentButtonState = (firstCoord, secondCoord) => {
    return buttonStates[firstCoord][secondCoord];
  }

  const getOnClickFn = (firstCoord, secondCoord) => {
    return () => setButtonStates(buttonStateUpdate(firstCoord, secondCoord));
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
            return <td key={element.concat(elements[idx])}>
              <button
                className={`${styles.checkboxButton} ${styles[getCurrentButtonState(elementIndex, idx)]}`}
                onClick={getOnClickFn(elementIndex, idx)}
              />
            </td>
          })}
        </tr>)
      })}
    </tbody>
  </table>);
}
