import './App.css';
import SectionCards from './components/SectionCards';

function App() {
  const cards = require('./json/cards-content.json');
  return (
    <div className="App">
      <SectionCards cards={cards}></SectionCards>
    </div>
  );
}

export default App;
