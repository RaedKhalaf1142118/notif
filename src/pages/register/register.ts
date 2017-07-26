import { Component, OnInit } from '@angular/core';
import { 
  NavController, 
  NavParams,
  AlertController,
  LoadingController,
  Nav,
  ToastController
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
    user_phone: '',
    user_type: 2
  };
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cityService: CityService,
    public alertController:AlertController,
    public loadingController:LoadingController,
    public registerService: RegisterService,
    public nav:Nav,
    public toastController:ToastController
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
    if(isValid){
      loading.present();
      this.registerService.register(this.model).subscribe( (data:any) => {
        loading.dismiss();
        this.nav.setRoot(LoginPage);
      });
    }else{
      loading.dismiss();
    }
  }

  validateForm(){
    if(this.model.user_name.length == 0){
      this.isRequired('Name is Required!');
      return false;
    }
    if(this.model.user_email.length == 0){
      this.isRequired('Email is Required!');
      return false;
    }
    if(this.model.user_password.length == 0){
      this.isRequired('Password is Required!');
      return false;
    }
    if(this.model.user_region.length == 0){
      this.isRequired('Region is Required!');
      return false;
    }
    if(this.model.user_phone.length == 0){
      this.isRequired('Phone number is Required!');
      return false;
    }
    if(this.confirmPassword.length == 0){
      this.isRequired('Confirm Password is Required!');
      return false;
    }
    if(this.confirmPassword != this.model.user_password){
      this.isRequired('Password is not confirmed!');
      return false;
    }
    return true;
  }

  private isRequired(message:string){
    this.toastController.create({
      message: message,
      duration: 1000,
      position: 'top'
    }).present();
  }

  uploadImage(img){
    console.log(img);
  }
}
