import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  @Output() showDetail = new EventEmitter<Recipe>();

  constructor() {}

  onDetail(detailRecipe) {
    this.showDetail.emit(detailRecipe);
  }

  ngOnInit() {}
}
