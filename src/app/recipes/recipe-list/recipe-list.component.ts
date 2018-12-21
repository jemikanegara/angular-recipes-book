import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  // @Output() showDetail = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  // onDetail(detailRecipe) {
  //   this.showDetail.emit(detailRecipe);
  // }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
}
