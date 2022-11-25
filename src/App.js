
import './App.css';
import Lottery from './components/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title={'Daily Game'} maxNum={10} numBall={4} />
      <Lottery title={'Mega Millions'} numBall={5} maxNum={70} powerNum= {25} />
    </div>
  );
}

export default App;
