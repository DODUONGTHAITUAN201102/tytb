import App from "./App.js";
import { attach } from "./lib/store.js";

const $ = document.querySelector.bind(document);

attach(App, $("#root"));
