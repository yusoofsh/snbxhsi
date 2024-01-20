import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import React from "https://esm.sh/react@18.2.0";

const App = ({ name }) => {
  return <h1 className="greeting">Halo {name}</h1>;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App name={"HSI"} />);
