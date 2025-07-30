import Header from "@/components/Header";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </>
  );
}

export default Layout;
