import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { FormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { CategoryDetailPage } from '../pages/category-detail/category-detail';
import { AdminsPage } from '../pages/admins/admins';
import { ReplayNotificationPage } from '../pages/replay-notification/replay-notification';

import { LocationService } from '../services/location.service';
import { AuthService } from '../services/auth.service';

import { NotificationComponent } from '../components/notification/notification';
import { CategoryComponent } from '../components/category/category';
import { AdminsInCategoryComponent } from '../components/admins-in-category/admins-in-category';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MapPage,
    CategoryDetailPage,
    RegisterPage,
    SettingsPage,
    NotificationComponent,
    CategoryComponent,
    AdminsPage,
    AdminsInCategoryComponent,
    ReplayNotificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MapPage,
    RegisterPage,
    SettingsPage,
    CategoryDetailPage,
    AdminsPage,
    ReplayNotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Diagnostic,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationService,
    AuthService
  ]
})
export class AppModule {}
