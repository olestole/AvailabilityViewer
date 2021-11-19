import React from "react";

const Layout: React.FC = ({ children }) => {
  return <div className="flex min-h-screen w-screen justify-center items-center overflow-scroll">{children}</div>;
};

export default Layout;
