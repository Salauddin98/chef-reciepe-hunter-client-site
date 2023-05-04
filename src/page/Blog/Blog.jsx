import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import ReactPDF from "../../ReactPdf/ReactPDF";
import image from "../../image/faq.png";
import Loading from "../../Loading/Loading";
import { useNavigation } from "react-router-dom";

const Blog = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <section className="container mx-auto px-10 mt-10 md:mt-32 lg:mt-16 mb-8">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt">
        <div className="flex flex-col gap-6  lg:px-0 w-full lg:w-[50%] mx-auto">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3>
                Differences between uncontrolled and controlled components.
              </h3>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
                1. Uncontrolled Components:
                <br />
                State Management: Uncontrolled components manage their own state
                internally, independent of React's state management. They
                typically utilize the traditional DOM elements, such as input
                fields, checkboxes, and select dropdowns.
                <br />
                Refs: Uncontrolled components can make use of the ref attribute
                to access the current value or state of the DOM element.
                However, they don't rely on refs for updating or manipulating
                their state.
                <br />
                Simplicity: Uncontrolled components are generally simpler to
                implement, as they don't require additional event handlers or
                state management logic. Data Flow: Since the state is managed
                internally, the parent component doesn't have direct control
                over the child component's state. To access the data from an
                uncontrolled component, you would typically use event handlers
                or callbacks.
                <br />
                2. Controlled Components:
                <br />
                State Management: Controlled components rely on the parent
                component to manage their state. The parent component passes the
                state value as props to the controlled component and also
                provides an event handler to update the state.
                <br />
                State Update: Controlled components update their state only
                through the event handlers provided by the parent component.
                They don't have their internal state.
                <br />
                Validation and Manipulation: Controlled components enable more
                control and flexibility for validation and manipulation of the
                input values before updating the state.
                <br />
                Data Flow: The parent component has direct control over the
                state of the controlled component. It can access the current
                state value, modify it, or use it in any way desired.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3>How to validate React props using PropTypes?</h3>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
                Import the PropTypes module from the prop-types package into
                your React component file:
                <br />
                Define the PropTypes for your component by creating a static
                propTypes object within your component class or function
                <br />
                component: Custom hooks can be used to encapsulate any reusable
                logic that involves state or side effects, such as fetching data
                from an API or managing a form's state. By creating custom
                hooks, you can abstract away the implementation details and
                create a clean, reusable API for your components to use.
                <br />
                PropTypes are mainly used for development-time debugging and
                documenting your component's API. They are not enforced in
                production builds, so it's recommended to use other techniques
                like TypeScript or runtime type-checking libraries (e.g.,
                TypeScript, Flow, or Joi) if you need more robust and
                runtime-enforced prop validation.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3>Difference between nodejs and express js.?</h3>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
                1. Node.js:
                <br />
                Node.js is a runtime environment that allows you to run
                JavaScript on the server-side. It uses the V8 JavaScript engine,
                the same engine that powers Google Chrome, to execute JavaScript
                code outside of the browser. Node.js provides a rich set of
                built-in modules and APIs that enable server-side programming,
                file system operations, networking, and more. It allows you to
                build scalable and efficient server applications.
                <br />
                Express.js:
                <br />
                2. Express.js is a minimalist web application framework built on
                top of Node.js. It provides a simple and flexible way to build
                web applications and APIs. Express.js adds a layer of
                abstraction to Node.js, simplifying the process of handling HTTP
                requests, routing, and middleware.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h1>
                What is a custom hook, and why will you create a custom hook?
              </h1>
            </div>
            <div className="collapse-content">
              <p className="text-justify">
                In React, a custom hook is a JavaScript function that utilizes
                React's built-in hooks (such as useState, useEffect, useContext,
                etc.) and allows you to encapsulate and reuse logic in your
                components. Custom hooks are a way to extract and share common
                stateful or side-effect logic across multiple components without
                duplicating code.
                <br />
                Here are a few reasons why you might want to create a custom
                hook:
                <br />
                1.Reusability: If you find yourself writing similar logic in
                multiple components, creating a custom hook allows you to
                encapsulate that logic in a single place and reuse it across
                different components. This promotes code reusability and reduces
                duplication.
                <br />
                2.Abstraction: Custom hooks provide a way to abstract complex
                logic into a single function, making your component code cleaner
                and more focused on its specific responsibilities. By
                abstracting the implementation details into a custom hook, the
                component code becomes easier to read and understand.
                <br />
                3.Code Organization: As your components grow in complexity, they
                might have several useEffect, useState, or other hooks that
                handle different aspects of the component's behavior. Creating a
                custom hook allows you to separate and organize this logic into
                smaller, reusable functions, improving the maintainability and
                readability of your codebase.
                <br />
                4.Shareable Logic: Custom hooks can be shared across projects or
                with the larger community. If you've developed a useful piece of
                logic that can benefit others, packaging it as a custom hook
                allows other developers to easily incorporate and leverage that
                logic in their own projects.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <img className="w-full lg:w-[50%] mx-auto" src={image} alt="" />
        </div>
      </div>
      <PDFDownloadLink document={<ReactPDF></ReactPDF>} fileName="FAQ">
        <div className="flex justify-center mt-6">
          {/* <button className="btn bg-slate-600 mt-4 mb-4 ">Download pdf</button> */}
          <button className="btn btn-outline btn-secondary">
            Download PDF
          </button>
        </div>
      </PDFDownloadLink>
    </section>
  );
};

export default Blog;
