import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { CategoryService } from '../services/category.service';
import { CityService } from '../services/city.service';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';
import { LoginRegisterService } from '../services/login-register.service';
import { PrivilegePage } from '../pages/privilege/privilege';
import { AdminPrivilegePage } from '../pages/admin-privilege/admin-privilege';
import { PrivilegeService } from '../services/privilege.service';

@Component({
  templateUrl: 'app.html',
  providers: [ 
    CategoryService, 
    CityService, 
    NotificationService,
    LoginRegisterService,
    PrivilegeService
  ]
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:string, condition: boolean}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public authService: AuthService,
    public alertController:AlertController,
    public loginRegisterService:LoginRegisterService
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    this.initializePages();
    this.authService.onLogged.subscribe( () =>{
      this.initializePages();
    });
    this.initializeLisenters();
  }

  initializeLisenters(){
    this.loginRegisterService.onSignUp.subscribe( () => {
      this.nav.setRoot(RegisterPage);
    });
  }

  initializePages(){
    this.pages = [
      { title: 'Home', component: HomePage , icon: "ios-home-outline", condition: true},
      { title: 'Login', component: LoginPage, icon: 'ios-log-in-outline', condition: !this.authService.isLogged()},
      { title: 'Map', component: MapPage, icon: 'md-map', condition: this.authService.isLogged()},
      { title: 'Register', component: RegisterPage, icon: 'ios-add-outline', condition: !this.authService.isLogged()},
      { title: 'Settings',component:SettingsPage, icon: 'ios-settings-outline', condition: this.authService.isLogged()},
      { title: 'Logout', component: HomePage, icon: 'ios-exit-outline', condition: this.authService.isLogged()},
      { title: 'Privileges', component: PrivilegePage, icon: 'md-checkbox-outline', condition: this.authService.isNormalUserLogged()},
      { title: 'Privileges', component: AdminPrivilegePage, icon: 'md-checkbox-outline', condition: this.authService.isAdminLogged()}
    ];
    this.pages = this.pages.filter( (page) =>{
      return page.condition;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title == 'Logout'){
      let logOutAlert = this.alertController.create({
        title: 'Are you sure you want to logout?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.authService.logout();
              this.nav.setRoot(LoginPage);
              this.initializePages();
            }
          },
          {
            text: 'No'
          }
        ]
      });
      logOutAlert.present();
    }else{
      this.nav.setRoot(page.component);
    }
  }

  
}
