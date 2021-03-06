import * as React from "react"
import IngredientSummary from "./IngredientSummary"
import IngredientDetailed from "./IngredientDetailed"

function Ingredients({ ingredients, summary }) {
  return (
    <div className={summary ? "" : "cb-ingredient-grid"}>
      {ingredients.map((elem, index) =>
        summary ? (
          <span key={elem.ingredient+"_"+index} >
            <IngredientSummary ingredient={elem} key={elem.ingredient} />
            {index < ingredients.length - 1 ? " · " : ""}
          </span>
        ) : (
          <IngredientDetailed ingredient={elem} key={elem.ingredient+"_"+index} />
        )
      )}
    </div>
  )
}

export default Ingredients
