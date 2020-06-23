import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import ToggleIngredInstruct from "../components/ToggleIngredInstruct";

const Food: React.FC<{}> = (props) => {
  const foodId = useParams<{ foodId: string }>().foodId;
  const [ingredients, setIngredients] = useState<any>();
  const [instructions, setInstructions] = useState<any>();
  const [selectedValue, setSelectedValue] = useState<string>("Ingredients");

  const toggleOption = (value: any) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${foodId}/ingredientWidget.json?apiKey=a883b7a4008e495a830a44a65b2ee19a`
    )
      .then((res) => res.json())
      .then((data) => setIngredients(data.ingredients));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${foodId}/analyzedInstructions?apiKey=a883b7a4008e495a830a44a65b2ee19a`
    )
      .then((res) => res.json())
      .then((data) => setInstructions(data[0].steps));
  }, []);

  let foodPic: any = "";
  let foodIngredientsRender: any = "Loading Ingredients...";
  let foodInstructionsRender: any = "Loading Instructions...";

  if (foodId) {
    foodPic = (
      <IonImg
        src={`https://spoonacular.com/recipeImages/${foodId}-312x231.jpg`}
      />
    );
  }

  if (ingredients) {
    foodIngredientsRender = ingredients.map((ingred: any) => {
      return (
        <IonItem>
          <IonLabel>
            <h2>{ingred.name}</h2>
            <p>{`${ingred.amount.us.value} ${ingred.amount.us.unit}`}</p>
          </IonLabel>
        </IonItem>
      );
    });
  }

  if (instructions) {
    foodInstructionsRender = instructions.map((instruction: any) => {
      return (
        <IonItem>
          <IonLabel>
            <p className="ion-text-wrap">{instruction.step}</p>
          </IonLabel>
        </IonItem>
      );
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/mainfood" />
          </IonButtons>
          <IonTitle>Recipii</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {foodPic}
        <ToggleIngredInstruct
          selectedValue={selectedValue}
          toggleOption={toggleOption}
        />
        <IonList>
          {selectedValue === "Ingredients"
            ? foodIngredientsRender
            : foodInstructionsRender}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Food;
