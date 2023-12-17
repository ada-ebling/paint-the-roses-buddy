import { LogicGrid } from './LogicGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Flex'>
        <LogicGrid elements={['🟥', '🦩', '🟨', '🟪']} secondSet={['♠', '♣', '♥', '♦']} />
        <LogicGrid elements={['🟥', '🦩', '🟨', '🟪']} />
      </div>
      <LogicGrid elements={['♠', '♣', '♥', '♦']} />
    </div>
  );
}

export default App;
