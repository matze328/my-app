import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/layout/navbar/Navigationbar';
import Content from './components/layout/content';
import Footer from './components/layout/footer';
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
         <Content />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
             <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
        <Footer />
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
