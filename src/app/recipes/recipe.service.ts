import { Recipe } from "./recipe.model";
import { EventEmitter, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A Super Tasty Schnitzel",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Ayam Bakar",
      "a food from indonesia",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Ayam_bakar_Aie_Badarun.JPG/800px-Ayam_bakar_Aie_Badarun.JPG",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  @Output() onDetail = new EventEmitter<Recipe>();

  getRecipe() {
    return this.recipes.slice();
  }
}
