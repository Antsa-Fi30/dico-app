import React, { useState } from "react";
import { IonSearchbar } from "@ionic/react";
import "./SearchBar.css";

const SearchbarInput: React.FC = () => {
  const [searchWord, setSearchWord] = useState("");
  const handleSearch = (event: any) => {
    console.log(event);
  };

  return <IonSearchbar class="custom" onChange={handleSearch}></IonSearchbar>;
};

export default SearchbarInput;
