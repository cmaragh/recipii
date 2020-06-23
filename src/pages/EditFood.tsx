import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import CuisineOptions from "../components/CuisineOptions";
import DietOptions from "../components/DietOptions";
import ToggleDietCuisine from "../components/ToggleCuisineDiet";

const EditFood: React.FC<{
  cuisineFilterHandler: (filter: string) => void;
  cuisineFilter: any;
  dietFilterHandler: (filter: string) => void;
  dietFilter: any;
  foodLoadedHandler: (bool: boolean) => void ;
}> = (props) => {
  const [selectedValue, setSelectedValue] = useState<string>("Cuisine");

  const toggleOption = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Edit Diet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ToggleDietCuisine
          toggleOption={toggleOption}
          selectedValue={selectedValue}
        />
        {selectedValue === "Cuisine" ? (
          <CuisineOptions
            cuisineFilterHandler={props.cuisineFilterHandler}
            cuisineFilter={props.cuisineFilter}
            foodLoadedHandler={props.foodLoadedHandler}
          />
        ) : (
          <DietOptions
            dietFilterHandler={props.dietFilterHandler}
            dietFilter={props.dietFilter}
            foodLoadedHandler={props.foodLoadedHandler}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default EditFood;
