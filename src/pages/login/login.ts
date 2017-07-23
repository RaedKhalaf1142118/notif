import { Component, ViewChild, OnInit } from '@angular/core';
import { 
  NavController, 
  NavParams, 
  ToastController,
  AlertController,
  LoadingController,
  Nav
} from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage implements OnInit{
  model = {
    user_email:'',
    user_password: ''
  };
  @ViewChild('loginForm') loginForm;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastController: ToastController,
    public loginService:LoginService,
    public alertController:AlertController,
    public loadingController:LoadingController,
    public nav:Nav,
    public authService: AuthService
  ) {
  }

  gmailAuthentication(){
  }

  ngOnInit(){
  }

  showToast(content){
    this.toastController.create({
      message: content,
      duration: 1500,
      position: 'top'
    }).present();
  }

  onSubmit(){
    let isValid = this.validateForm();
    
    let loading = this.loadingController.create({
      content: 'please wait...',
    });
    loading.present();

    if(isValid){
      this.loginService.login(this.model).subscribe( (data) => {
        if(data == false){
          loading.dismiss();
          setTimeout(() => {              
            this.alertController.create({
              title: 'invalid email or password'
            }).present();
          }, 500);
        }else{
          this.authService.saveUser(data);
          loading.dismiss();
          this.nav.setRoot(HomePage);
        }
      });
    }
  }

  private validateForm(): boolean{
    return true;
  }
}
