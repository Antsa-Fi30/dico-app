import React from "react";
import "./SearchContent.css";
import Lists from "./Lists";
import SearchbarInput from "./SearchBarInput";

const SearchContent: React.FC = () => {
  return (
    <>
      <div>
        <SearchbarInput />
        <Lists />
      </div>
    </>
  );
};

export default SearchContent;
