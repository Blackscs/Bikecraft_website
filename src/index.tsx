/* @refresh reload */
import { render } from "solid-js/web";

import "../src/styles/styles.css";
import App from "./App.tsx";

render(() => <App/>, document.getElementById("root") as HTMLElement);
