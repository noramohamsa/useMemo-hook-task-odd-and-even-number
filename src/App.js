import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const handelCountOne = () => {
    setCountOne(countOne + 1)
  }
  const handelCountTwo = () => {
    setCountTwo(countTwo + 1)
  }
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;
    return countOne % 2 === 0;
  }, [countOne])

  const isEvenTwo = () => {
    return countTwo % 2 === 0
  }
  return (
    <div className="App">
      <button onClick={handelCountOne}>countOne -{countOne}</button>
      <div>{isEven ? "EVEN NUMBER" : 'ODD NUMBER'}</div>   <br />
      <button onClick={handelCountTwo}>countOne -{countTwo}</button>
      {isEvenTwo() ? "EVEN NUMBER" : 'ODD NUMBER'}
    </div>
  );
}

export default App;
