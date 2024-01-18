import { createElement } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import App from "./components/index.js";

const root = createRoot(document.getElementById("root"));
root.render(createElement(App, { name: "HSI" }));
