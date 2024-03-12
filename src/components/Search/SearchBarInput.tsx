import React, { useState } from "react";
import { IonSearchbar } from "@ionic/react";
import "./SearchBar.css";

const SearchbarInput: React.FC = () => {
  const [searchWord, setSearchWord] = useState("");
  const handleSearch = (event: any) => {
    setSearchWord(event.nativeEvent.target.value);
  };

  return (
    <IonSearchbar
      class="custom"
      onKeyUp={handleSearch}
      value={searchWord}
    ></IonSearchbar>
  );
};

export default SearchbarInput;
