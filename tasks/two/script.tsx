/**
 * This code runs in the browser without a build step,
 * yet providing a decent developer experience.
 * It is possible because:
 * - TypeScript and JSX are transpiled using Babel (https://babeljs.io/docs/babel-standalone).
 * - Deno provides the language server combined with the types from esm.sh (https://docs.deno.com/runtime/manual/advanced/typescript/types#deno-friendly-cdns).
 * The external dependencies used by this application were only React and Babel. It is allowed (https://t.me/c/1808349325/143).
 */

// Disable "any" types checking.
// deno-lint-ignore-file no-explicit-any

// Allows the document object to be typed.
/// <reference lib="dom" />
// Allows the es6 properties to be typed.
/// <reference lib="es2023" />

// @ts-ignore -- Will be resolved runtime.
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
// @ts-ignore -- Will be resolved runtime.
import React, { useRef, useState } from "https://esm.sh/react@18.2.0";

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
      <button type="submit" className="button-primary">
        Next step
      </button>
    </div>
  );
};

const Form = (
  { number, formData, formError, formInputRef, handleInputChange }: {
    number: number;
    formData: any;
    formError: any;
    formInputRef: any;
    handleInputChange: (e: any) => void;
  },
) => {
  const { title, description, content } = pages[number - 1];

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="row">
        <div className="column">
          <p style={{ color: formError.name ? "#962dff" : "" }}>
            {content.name.label}
          </p>
          <input
            ref={formInputRef.name}
            name="name"
            className="input-text"
            placeholder={content.name.label}
            type={content.name.type}
            style={{
              backgroundImage: `url(${content.name.icon})`,
              borderColor: formError.name ? "#962dff" : "",
            }}
            value={formData.name}
            onChange={handleInputChange}
          />
          {formError.name && (
            <span className="input-error">{formError.name}</span>
          )}
        </div>
        <div className="column">
          <p style={{ color: formError.email ? "#962dff" : "" }}>
            {content.email.label}
          </p>
          <input
            ref={formInputRef.email}
            name="email"
            className="input-text"
            placeholder={content.email.label}
            type={content.email.type}
            style={{
              backgroundImage: `url(${content.email.icon})`,
              borderColor: formError.email ? "#962dff" : "",
            }}
            value={formData.email}
            onChange={handleInputChange}
          />{" "}
          {formError.email && (
            <span className="input-error">{formError.email}</span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="column">
          <p style={{ color: formError.phone ? "#962dff" : "" }}>
            {content.phone.label}
          </p>
          <input
            ref={formInputRef.phone}
            name="phone"
            className="input-text"
            placeholder={content.phone.label}
            type={content.phone.type}
            style={{
              backgroundImage: `url(${content.phone.icon})`,
              borderColor: formError.phone ? "#962dff" : "",
            }}
            value={formData.phone}
            onChange={handleInputChange}
          />
          {formError.phone && (
            <span className="input-error">{formError.phone}</span>
          )}
        </div>
        <div className="column">
          <p style={{ color: formError.company ? "#962dff" : "" }}>
            {content.company.label}
          </p>
          <input
            ref={formInputRef.company}
            name="company"
            className="input-text"
            placeholder={content.company.label}
            type={content.company.type}
            style={{
              backgroundImage: `url(${content.company.icon})`,
              borderColor: formError.company ? "#962dff" : "",
            }}
            value={formData.company}
            onChange={handleInputChange}
          />
          {formError.company && (
            <span className="input-error">{formError.company}</span>
          )}
        </div>
      </div>
    </>
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

  // Refs for input elements
  const formInputRef = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    company: useRef(null),
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormError({ ...formError, [name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Form validation
    const newErrors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      email: formData.email.trim() === ""
        ? "Email is required"
        : !formData.email.trim().endsWith("@gmail.com")
        ? "Email is invalid"
        : "",
      phone: formData.phone.trim() === ""
        ? "Phone number is required"
        : !formData.phone.trim().match(/^08\d{8,12}$/)
        ? "Phone number is invalid"
        : "",
      company: formData.company.trim() === "" ? "Company is required" : "",
    };

    setFormError(newErrors);

    // Find the first field with an error
    let firstErrorField: any = null;
    for (const [field, error] of Object.entries(newErrors)) {
      if (error !== "") {
        switch (field) {
          case "name":
            firstErrorField = formInputRef.name.current;
            break;
          case "email":
            firstErrorField = formInputRef.email.current;
            break;
          case "phone":
            firstErrorField = formInputRef.phone.current;
            break;
          case "company":
            firstErrorField = formInputRef.company.current;
            break;
          default:
            break;
        }
        break;
      }
    }

    // If any field is empty or invalid, stop form submission
    if (Object.values(newErrors).some((error) => error !== "")) {
      // Set focus to the field with an error
      if (firstErrorField) {
        firstErrorField.focus();
      }
      return;
    }

    // Proceed with form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="form-container">
            <Steps number={number} />
            <span className="divider" />
            <Form
              number={number}
              formData={formData}
              formError={formError}
              formInputRef={formInputRef}
              handleInputChange={handleInputChange}
            />
          </div>
          <NextButton />
        </div>
      </form>
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
