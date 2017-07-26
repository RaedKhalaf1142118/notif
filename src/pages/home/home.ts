import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { City } from '../../models/city.model';
import { CityService } from '../../services/city.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { LocationService } from '../../services/location.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  isError = false;
  myCity: City = undefined;
  cities: City[] = undefined;
  categories: Category[] = undefined;

  constructor(
    public navCtrl: NavController,
    public cityService:CityService, 
    public categoryService:CategoryService,
    public alertController: AlertController,
    public loadingController:LoadingController,
    public locationService:LocationService,
    public authService:AuthService
  ) {}

  ngOnInit(){
    this.cityService.getCities().subscribe( (cities) => {
      this.cities = cities;
      // TO-DO get My City.
      this.myCity = cities[0];
      this.locationService.currentCity = this.myCity;
      this.prepareCategories();
    });
    setTimeout(() => {
      if(this.cities == undefined){
        this.displayError();
      }
    }, 5000);
  }

  prepareCategories(){
    this.categoryService.getCityCategories(this.myCity).subscribe( (categories) => {
      this.categories = categories;
    });
    setTimeout(() => {
      if(this.categories == undefined){
        this.displayError();
      }
    }, 5000);
  }

  displayError(){
    this.isError = true;
  }

  canAddCategory(){
    return this.authService.isAdminLogged();
  }

  addCategory(){
    this.alertController.create({
      title: 'New Category',
      inputs: [
        {
          name:'category_Name',
          placeholder: 'category name'
        },
        {
          name: 'description',
          placeholder:'Category description'
        }
      ],
      buttons: [
        {
          text: 'Add',
          handler: (data) =>{
            let loading = this.loadingController.create({
              content: 'Please wait...'
            });
            loading.present();
            this.categoryService.addCategory({category_Name:data.category_Name,description:data.description, cityID:this.locationService.currentCity.cityID}).subscribe( (category) => {
              this.categories.push(category);
              loading.dismiss();
            });
          }
        },
        {
          text: 'Cancel'
        }
      ]
    }).present();
  }
}
