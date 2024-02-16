import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from "@ionic/react";

import "./Lists.css";
import List from "./List";

function Lists() {
  const [wordCount, setWordCount] = useState(0);

  return (
    <div className="cardIon">
      <IonCardHeader>
        <IonCardTitle>Results of : </IonCardTitle>
        <IonCardSubtitle>{wordCount} found</IonCardSubtitle>
      </IonCardHeader>
      <div>
        <IonList>
          <List />
          <List />
          <List />
        </IonList>
      </div>
    </div>
  );
}
export default Lists;
