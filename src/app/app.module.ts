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
import { ReplayNotificationPage } from '../pages/replay-notification/replay-notification';
import { PrivilegePage } from '../pages/privilege/privilege';
import { AdminPrivilegePage } from '../pages/admin-privilege/admin-privilege';
import { PrivilegeRequestsPage } from '../pages/privilege-requests/privilege-requests';

import { LocationService } from '../services/location.service';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

import { NotificationComponent } from '../components/notification/notification';
import { CategoryComponent } from '../components/category/category';
import { ErrorComponent } from '../components/error/error';
import { AddNotificationComponent } from '../components/add-notification/add-notification';
import { PrivilegeComponent } from '../components/privilege/privilege';

import { LimitTextPipe } from '../pipes/limit-text.pipe';

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
    ReplayNotificationPage,
    ErrorComponent,
    PrivilegePage,
    AddNotificationComponent,
    LimitTextPipe,
    AdminPrivilegePage,
    PrivilegeComponent,
    PrivilegeRequestsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
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
    ReplayNotificationPage,
    PrivilegePage,
    AdminPrivilegePage,
    PrivilegeRequestsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Diagnostic,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationService,
    AuthService,
    UsersService
  ]
})
export class AppModule {}
