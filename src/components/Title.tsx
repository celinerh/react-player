import React from "react";

function Title({ title }: { title: string }) {
  return <h2 className="font-bold text-secondary dark:text-white">{title}</h2>;
}

export default Title;
