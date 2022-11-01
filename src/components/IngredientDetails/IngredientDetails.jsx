import React from "react";
import IngredientModalStyles from "./IngredientDetails.module.css";

function IngredientDetails(props) {
  return (
    <div className={IngredientModalStyles.Container}>
      <h2
        className={`text text_type_main-large ${IngredientModalStyles.Title}`}
      >
        Детали ингредиента
      </h2>
      <img
        className={`pb-4 ${IngredientModalStyles.Image}`}
        src={props.ingredientObject.image_large}
        alt={props.ingredientObject.name}
      />
      <h3
        className={`pb-8 text text_type_main-medium ${IngredientModalStyles.Ingredient}`}
      >
        {props.ingredientObject.name}
      </h3>
      <div className={IngredientModalStyles.StatsContainer}>
        <div className={IngredientModalStyles.Stat}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {props.ingredientObject.calories}
          </p>
        </div>
        <div className={IngredientModalStyles.Stat}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {props.ingredientObject.proteins}
          </p>
        </div>
        <div className={IngredientModalStyles.Stat}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {props.ingredientObject.fat}
          </p>
        </div>
        <div className={IngredientModalStyles.Stat}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {props.ingredientObject.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
