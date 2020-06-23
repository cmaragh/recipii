import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const ToggleIngredInstruct: React.FC<{
  selectedValue: string;
  toggleOption: (value: string) => void;
}> = (props) => {
  const toggleOptionHandler = (event: CustomEvent) => {
    props.toggleOption(event.detail.value);
  };
  return (
    <IonSegment value={props.selectedValue} onIonChange={toggleOptionHandler}>
      <IonSegmentButton value="Ingredients">
        <IonLabel>Ingredients</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="Instructions">
        <IonLabel>Instructions</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default ToggleIngredInstruct;
