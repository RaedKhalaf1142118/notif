import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user.model';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'page-replay-notification',
  templateUrl: 'replay-notification.html',
})
export class ReplayNotificationPage implements OnInit{
  private loggedUser:User;
  private ownerUser:User;
  private notification: Notification;
  private cityId:number;
  private category;
  private replays: { replayOwner: User, content:string }[] = undefined;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.loggedUser = this.navParams.get("loggedUser");
    this.ownerUser = this.navParams.get("notificationOwner");
    this.notification = this.navParams.get("notification");
    this.cityId = this.navParams.get("cityId");
    this.category = this.navParams.get("category");
  }
}
