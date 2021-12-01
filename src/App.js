import logo from "./ranger.png";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div id="jsv-holder">
        <img
          id="jsv-image"
          alt="Ranger Shoes"
          src="https://www.safetyranger.co.id/@static/kim/panorama/0001.jpg"
          className="Inertia"
        />
      </div>
      <div className="log">
        <span id="log"></span>
        <span id="error-log"></span>
      </div>
    </div>
  );
}
//response
export function log(msg: string, error: boolean = false): void {
  const el = error
    ? document.getElementById("error-log")
    : document.getElementById("log");

  if (el) {
    el.innerHTML = msg;
  }
}
