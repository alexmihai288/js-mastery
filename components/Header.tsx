import React from "react";

interface HeaderProps {
  query: string;
  category: string;
}

export const Header = ({ query, category }: HeaderProps) => {
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        `Search results for {query} in {<span className="capitalize">{category}</span>}`
      </h1>
    );
  }

  if (query) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for {query}
      </h1>
    );
  }

  if (category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        <span className="capitalize">{category}</span>
      </h1>
    );
  }

  return <h1 className="heading3 self-start text-white-800">No results</h1>;
};
