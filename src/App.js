import { LogicGrid } from './LogicGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <LogicGrid elements={['🟥', '🦩', '🟨', '🟪']} />
      <LogicGrid elements={['♠', '♣', '♥', '♦']} />
    </div>
  );
}

export default App;
