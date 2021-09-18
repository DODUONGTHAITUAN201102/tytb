import html from "./lib/core.js";
import { connect } from "./lib/store.js";
import Home from "./components/Home.js";
import About from "./components/About.js";

const connector = connect();

function App({ cars }) {
    return html` <div class="app">${Home()}</div> `;
}

export default connector(App);
