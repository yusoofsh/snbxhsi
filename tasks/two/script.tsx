/**
 * This code runs in the browser without a build step,
 * yet providing a decent developer experience.
 * It is possible because:
 * - TypeScript and JSX are transpiled using Babel (https://babeljs.io/docs/babel-standalone)
 * - Deno provides the language server combined with the types from esm.sh (https://docs.deno.com/runtime/manual/advanced/typescript/types#deno-friendly-cdns)
 * The external dependencies used by this application were only React and Babel.
 */

/// <reference lib="dom" />

// @ts-ignore -- CDN import will be resolved.
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
// @ts-ignore -- CDN import will be resolved.
import React from "https://esm.sh/react@18.2.0";

const App = ({ name }: { name: string }) => {
  return <h1 className="greeting">Halo {name}</h1>;
};

const target = document.getElementById("root");
if (!target) throw "Target element #root not found";

const root = ReactDOM.createRoot(target);

root.render(<App name={"HSSI"} />);
