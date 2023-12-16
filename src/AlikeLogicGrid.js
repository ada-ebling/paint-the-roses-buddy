import { useState } from 'react';
import styles from './AlikeLogicGrid.module.css';

const BUTTON_STATES = ['unchecked', 'crossed', 'checked'];

export function AlikeLogicGrid({ elements }) {
  const [buttonChecked, setButtonChecked] = useState(BUTTON_STATES[0]);

  const nextButtonState = (currentButtonState) => {
    const index = BUTTON_STATES.findIndex((el) => currentButtonState === el);
    return index >= 2 ? BUTTON_STATES[0] : BUTTON_STATES[index + 1];
  };

  const onCheckboxClick = () => {
    setButtonChecked(nextButtonState(buttonChecked));
  };

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
              <button className={`${styles.checkboxButton} ${styles[buttonChecked]}`} onClick={onCheckboxClick} />
            </td>
          })}
        </tr>)
      })}
    </tbody>
  </table>);
}
