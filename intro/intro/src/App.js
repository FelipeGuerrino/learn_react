import logo from './logo.svg';
import './App.css';
import Button from './Button';

function sum(a, b) {
  alert(a + b)
}

function primeiroJSX()
{
  return (
    <div>
      Felipe Guerrino - Introdução ao ReactJS
      {/* <h1>
        Soma: {sum(34, 35)}
      </h1> */}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      {primeiroJSX()}
      <Button onClick={() => sum(34, 35)} name="Felipe Guerrino"></Button>
    </div>
  );
}

export default App;
