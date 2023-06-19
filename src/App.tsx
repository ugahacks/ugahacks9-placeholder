import Logo from "./components/Logo/Logo";
import mlhBanner from "./images/mlh-trust-badge-2024-white.svg";
import byteFlying from "./images/byte flying.png";

function App() {
  return (
    <div className="app">
      <img className="mlh-banner" src={mlhBanner}></img>
      <Logo />
      <div className="background-image"></div>
    </div>
  );
}

export default App;
