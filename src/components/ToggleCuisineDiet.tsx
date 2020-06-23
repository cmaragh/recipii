import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const ToggleCuisineDiet: React.FC<{
  selectedValue: string;
  toggleOption: (value: string) => void;
}> = (props) => {

    const toggleOptionHandler = (event: CustomEvent) => {
        props.toggleOption(event.detail.value);
    }
  return (
    <IonSegment value={props.selectedValue} onIonChange={toggleOptionHandler}>
      <IonSegmentButton value="Cuisine">
        <IonLabel>Cuisine</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="Diet">
        <IonLabel>Diet</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default ToggleCuisineDiet;
