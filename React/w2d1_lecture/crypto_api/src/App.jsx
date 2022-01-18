import logo from './logo.svg';
import './App.css';
import CryptoCoinsUsingFetch from './components/CryptoCoinsUsingFetch';
import CryptoCoinsUsingAxios from './components/CryptoCoinsUsingAxios';

function App() {
  return (
    <div className="App">
      <h1>Hello Crypto Using API</h1>
      <CryptoCoinsUsingAxios></CryptoCoinsUsingAxios>
    </div>
  );
}

export default App;
