export function AlikeLogicGrid({ elements }) {
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
              <input type={'checkbox'}></input>
            </td>
          })}
        </tr>)
      })}
    </tbody>
  </table>);
}
