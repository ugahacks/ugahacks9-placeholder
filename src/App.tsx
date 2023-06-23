import Logo from "./components/Logo/Logo";
import mlhBanner from "./images/mlh-trust-badge-2024-white.svg";

function App() {
  return (
    <div className="app">
      <img
        className="mlh-banner"
        src={mlhBanner}
        alt="major league 2024 banner"
      ></img>
      <Logo />
    </div>
  );
}

export default App;
