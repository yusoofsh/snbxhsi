/**
 * This code runs in the browser without a build step,
 * yet providing a decent developer experience.
 * It is possible because:
 * - TypeScript and JSX are transpiled using Babel (https://babeljs.io/docs/babel-standalone).
 * - Deno provides the language server combined with the types from esm.sh (https://docs.deno.com/runtime/manual/advanced/typescript/types#deno-friendly-cdns).
 * The external dependencies used by this application were only React and Babel. It is allowed (https://t.me/c/1808349325/143).
 */

// Allows the document object to be typed.
/// <reference lib="dom" />
// Allows the es6 properties to be typed.
/// <reference lib="es6" />

// @ts-ignore -- Will be resolved runtime.
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
// @ts-ignore -- Will be resolved runtime.
import React from "https://esm.sh/react@18.2.0";

type Content = { name: string; label: string; type: string; icon: string };

type Page = {
  title: string;
  description: string;
  content: Record<string, Content>;
};

const pages: Page[] = [
  {
    title: "Contact details",
    description: "Lorem ipsum dolor sit amet consectetur adipisc.",
    content: {
      name: { name: "name", label: "Name", type: "text", icon: "./user.svg" },
      email: {
        name: "email",
        label: "Email",
        type: "email",
        icon: "./mail.svg",
      },
      phone: {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        icon: "./phone.svg",
      },
      company: {
        name: "company",
        label: "Company",
        type: "text",
        icon: "./building.svg",
      },
    },
  },
  { title: "", description: "", content: {} },
  { title: "", description: "", content: {} },
  { title: "", description: "", content: {} },
];

const NextButton = () => {
  return (
    <div className="button-container">
      <button type="button" className="button-primary">
        Next step
      </button>
    </div>
  );
};

const Form = ({ number }: { number: number }) => {
  const { title, description, content } = pages[number - 1];

  return (
    <form>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="row">
        <div className="column">
          <p>{content.name.label}</p>
          <input
            name={content.name.name}
            className="input-text"
            placeholder={content.name.label}
            type={content.name.type}
            style={{ backgroundImage: `url(${content.name.icon})` }}
          />
        </div>
        <div className="column">
          <p>{content.email.label}</p>
          <input
            name={content.email.name}
            className="input-text"
            placeholder={content.email.label}
            type={content.email.type}
            style={{ backgroundImage: `url(${content.email.icon})` }}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p>{content.phone.label}</p>
          <input
            name={content.phone.name}
            className="input-text"
            placeholder={content.phone.label}
            type={content.phone.type}
            style={{ backgroundImage: `url(${content.phone.icon})` }}
          />
        </div>
        <div className="column">
          <p>{content.company.label}</p>
          <input
            name={content.company.name}
            className="input-text"
            placeholder={content.company.label}
            type={content.company.type}
            style={{ backgroundImage: `url(${content.company.icon})` }}
          />
        </div>
      </div>
    </form>
  );
};

const Steps = ({ number }: { number: number }) => {
  return (
    <div className="steps">
      {pages.map((_, index) => {
        const step = index + 1;
        const progressHalf = step === number;
        const progressFull = step <= number;
        const currentStep = progressHalf || progressFull;
        const progressPercentage = (() => {
          if (progressHalf) return 50;
          if (progressFull) return 100;
          return 0;
        })();

        return (
          <React.Fragment key={step}>
            <div
              className="circle"
              style={{
                color: currentStep ? "#fff" : "#6f6c90",
                backgroundColor: currentStep ? "#4a3aff" : "",
              }}
            >
              {step}
            </div>
            {index !== pages.length - 1 && (
              <div className="bar">
                <div
                  className="progress"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Main = () => {
  const number = 1;

  return (
    <div className="main">
      <div className="form-wrapper">
        <div className="form-container">
          <Steps number={number} />
          <span className="divider" />
          <Form number={number} />
        </div>
        <NextButton />
      </div>
    </div>
  );
};

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

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

const target = document.getElementById("root");
if (!target) throw new Error("Target element #root not found");

const root = ReactDOM.createRoot(target);

root.render(<App />);
