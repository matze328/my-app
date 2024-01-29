import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
         <nav id="navbar">
            <div className="nav-buttons">
                <a className="anmelden" href="C:\Users\xmatz\OneDrive\Dokumente\GitHub\web-development\html_css\eigenes finstergramm\login.html"> anmelden </a>
                <a className="registrieren" href="C:\Users\xmatz\OneDrive\Dokumente\GitHub\web-development\html_css\eigenes finstergramm\sign_up.html"> registrieren </a>
            </div>
        </nav>
      </body>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
