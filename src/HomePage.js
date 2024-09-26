import logo from "./logo.svg";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Babyquip dev
        </a>
      </header>
    </div>
  );
}

export default HomePage;
