import React from "react";

const button = ({ children, ...args }) => {
  return <button {...args}>{children}</button>;
};

export default button;
