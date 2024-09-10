import logo from './logo.svg';
import './App.css';
import { Buffer } from 'buffer';

function App() {
  const encodedString = process.env.REACT_APP_SOME_ENCODED_STRING
  const decodedString = Buffer.from(encodedString, 'base64').toString('utf-8');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {decodedString} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
