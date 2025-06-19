import './App.css';
import CounterClassComponent from './Components/CounterClassComponent';
import CounterFunctionalComponent from './Components/CounterFunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Assignment-2 Counter Application
        <div className='App-counter'>
          <div className='App-classComp'>
            <CounterClassComponent/>
          </div>
          <div className='App-functComp'>
            <CounterFunctionalComponent/>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
