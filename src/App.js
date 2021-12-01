// import logo from "./react.png";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div id="jsv-holder">
        <img
          id="jsv-image"
          alt="your 360 images"
          src="https://www.safetyranger.co.id/@static/kim/panorama/0001.jpg"
        />
      </div>
      <div class="log">
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
