import React from "react";

function Heading({ title }: { title: string }) {
  return (
    <h1 className="block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gradientR to-gradientL w-fit">
      {title}
    </h1>
  );
}

export default Heading;
