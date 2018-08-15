import { Component } from "@angular/core";
import { DefaultService, City, NewCity } from "./api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public addNew = false;
  public title = "frontend";
  public city: City;
  public newCity: NewCity = {};
  public cities: Array<City> = [];

  constructor(private defaultService: DefaultService) {}

  public ngOnInit() {
    this.defaultService
      .listCities()
      .subscribe(cities => (this.cities = cities));
  }

  public showCity(id) {
    this.defaultService.getCity(id).subscribe(city => (this.city = city));
  }

  public enableAdd() {
    this.addNew = true;
  }

  public submit() {
    console.log(this.newCity);
    this.defaultService.addCity(this.newCity).subscribe(cities => {
      this.cities = cities;
      this.addNew = false;
    });
  }
}
