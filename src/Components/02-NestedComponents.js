import React from "react";

const NestedComponents = () => {
  return (
    <div>
      <h1>Nested Components</h1>
      <div>
        <ComponentsOne />
      </div>
    </div>
  );
};

export default NestedComponents;

const ComponentsOne = () => {
  return (
    <div>
      <h3>
        Nested Components is react but this is example in same file so this is
        not that nested{" "}
      </h3>
      <div>
        <ComponentTwo />
      </div>
    </div>
  );
};

const ComponentTwo = () => {
  return (
    <div>
      <p>
        This is second Component which is nested in the One Component and it can
        nested with the help of the new folder and files{" "}
      </p>
    </div>
  );
};
