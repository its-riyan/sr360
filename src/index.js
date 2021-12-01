import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { JavascriptViewer } from "@3dweb/360javascriptviewer";

import App from "./App";
import log from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

const safetyranger = new JavascriptViewer({
  imageUrlFormat: "000x.jpg",
  totalFrames: 49,
  reverse: true,
  autoRotate: 1,
  defaultProgressBar: true,
  speed: 90,
  inertia: 12,
  zoom: true,
  notificationConfig: {
    dragToRotate: {
      showStartToRotateDefaultNotification: true,
      mainColor: "rgba(0,0,0,0.20)",
      textColor: "rgba(243,237,237,0.80)"
    }
  }
});

safetyranger
  .start()
  .then(() => {
    log("View");
  })
  .catch((msg: string) => {
    log(msg, true);
  });
