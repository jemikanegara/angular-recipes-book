import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ng-project";
  loadedFeature: string;
  constructor() {
    this.loadedFeature = "recipe";
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {}
}
