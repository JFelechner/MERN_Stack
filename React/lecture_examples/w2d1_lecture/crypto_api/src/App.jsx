import logo from './logo.svg';
import './App.css';
import CryptoCoinsUsingFetch from './components/CryptoCoinsUsingFetch';
import PokemonHint from './components/PokemonHint';
import CryptoCoinsUsingAxios from './components/CryptoCoinsUsingAxios';
import CryptoCoinsUsingAxiosAndUseEffect from './components/CryptoCoinsUsingAxiosAndUseEffect';

function App() {
  return (
    <div className="App">
      <h1>Hello Crypto Api demo</h1>
      {/* <CryptoCoinsUsingFetch></CryptoCoinsUsingFetch> */}
      {/* <PokemonHint></PokemonHint> */}
      {/* <CryptoCoinsUsingAxios></CryptoCoinsUsingAxios> */}
      <CryptoCoinsUsingAxiosAndUseEffect></CryptoCoinsUsingAxiosAndUseEffect>
    </div>
  );
}

export default App;
