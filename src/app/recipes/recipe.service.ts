import { Recipe } from "./recipe.model";
import { EventEmitter, Output } from "@angular/core";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "Ayam Bakar",
      "a food from indonesia",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Ayam_bakar_Aie_Badarun.JPG/800px-Ayam_bakar_Aie_Badarun.JPG"
    )
  ];

  @Output() onDetail = new EventEmitter<Recipe>();

  getRecipe() {
    return this.recipes.slice();
  }
}
