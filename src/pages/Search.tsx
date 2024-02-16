import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
} from "@ionic/react";
import "./Search.css";
import SearchContent from "../components/Search/SearchContent";

const Search = () => {
  return (
    <IonPage>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>

      <IonContent fullscreen>
        <SearchContent />
      </IonContent>
    </IonPage>
  );
};

export default Search;
