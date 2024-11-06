import React from "react";

const index = ({ children }) => {
  return (
    <section className="mx-auto h-full min-h-screen w-full min-w-0 px-4 pb-24 pt-4 sm:px-8 sm:pt-12 md:max-w-2xl">
      <div>{children}</div>
    </section>
  );
};

export default index;
