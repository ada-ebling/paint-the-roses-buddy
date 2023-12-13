import { AlikeLogicGrid } from './AlikeLogicGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <AlikeLogicGrid elements={['🟥', '🦩', '🟨', '🟪']} />
      <AlikeLogicGrid elements={['♠', '♣', '♥', '♦']} />
    </div>
  );
}

export default App;
