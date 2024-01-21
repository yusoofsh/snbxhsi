/**
 * This code runs in the browser without a build step,
 * yet providing a decent developer experience.
 * It is possible because:
 * - TypeScript and JSX are transpiled using Babel (https://babeljs.io/docs/babel-standalone).
 * - Deno provides the language server combined with the types from esm.sh (https://docs.deno.com/runtime/manual/advanced/typescript/types#deno-friendly-cdns).
 * The external dependencies used by this application were only React and Babel. It is allowed (https://t.me/c/1808349325/143).
 */

// Allows the document object to be typed. Ignored on runtime.
/// <reference lib="dom" />

// @ts-ignore -- Will be resolved runtime.
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
// @ts-ignore -- Will be resolved runtime.
import React from "https://esm.sh/react@18.2.0";

const Steps = () => (
  <div className="steps">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
);

const Container = () => (
  <div className="container">
    <Steps />
  </div>
);

const Header = () => (
  <div className="text-center">
    <h1>Get a project quote</h1>
    <p className="subtitle">
      Please fill the form below to receive a quote for your project.
      <br />
      Feel free to add as much detail as needed.
    </p>
  </div>
);

const App = () => (
  <>
    <Header />
    <Container />
  </>
);

const target = document.getElementById("root");
if (!target) throw "Target element #root not found";

const root = ReactDOM.createRoot(target);

root.render(<App />);
