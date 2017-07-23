import { Component, OnInit } from '@angular/core';
import { 
  NavController, 
  NavParams,
  AlertController,
  LoadingController,
  Nav
} from 'ionic-angular';

import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';
import { RegisterService } from '../../services/register.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [RegisterService]
})
export class RegisterPage implements OnInit{
  cities:City[];
  confirmPassword = '';
  model={
    user_name: '',
    user_password: '',
    user_email: '',
    user_region: '',
    user_phone: ''
  };
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cityService: CityService,
    public alertController:AlertController,
    public loadingController:LoadingController,
    public registerService: RegisterService,
    public nav:Nav
  ) {
  } 

  ngOnInit(){
    this.cityService.getCities().subscribe( (cities) => {
      this.cities = cities;
    }); 
  } 

  onSubmit(){
    console.log(this.model);
    let isValid:boolean = this.validateForm();
    let loading = this.loadingController.create({
      content:'Please wait'
    });
    loading.present();
    if(isValid){
      this.registerService.register(this.model).subscribe( (data:any) => {
        loading.dismiss();
        this.nav.setRoot(LoginPage);
      });

    }else{
      loading.dismiss();
      setTimeout(() => {
        this.alertController.create({
        title: 'invalid information',
        buttons: [
          {
            text: 'Ok'
          }
        ]
      }).present();
      }, 500);
    }
  }

  validateForm(){
    return true;
  }
}
