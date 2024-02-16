import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonList,
  IonNote,
  IonThumbnail,
} from "@ionic/react";

import "./List.css";

function List() {
  return (
    <div className="itemSearch">
      <h1 className="title">Bonjour</h1>
      <div>
        <IonNote className="trad">Traduction ici(en)</IonNote>
        <IonNote className="trad">Explication ou ... ici(en)</IonNote>
      </div>
      <div>
        <IonNote className="trad">Traduction ici(en)</IonNote>
      </div>
      <div className="explan">
        - (Familié) C'est une sorte de locuteur utilisée dans une phrase
        formelle; Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus iure quas cum maiores earum rerum, distinctio hic?
        Nesciunt, neque porro
        <div>
          - (Métaphorique) C'est une sorte de locuteur utilisée dans une phrase
          formelle
        </div>
      </div>
    </div>
  );
}
export default List;
