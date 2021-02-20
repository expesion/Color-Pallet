import './App.css';
import Palette from "./Palette"
import seedColor from './seedColors'
function App() {
  return (
    <div className="App">
      <Palette palette={seedColor[4]}/>
    </div>
  );
}

export default App;
