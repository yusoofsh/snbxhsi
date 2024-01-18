import { createElement } from "https://esm.sh/react@18.2.0";

export default ({ name }) => {
  return createElement("h1", { className: "greeting" }, `Halo ${name}`);
};
