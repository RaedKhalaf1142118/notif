import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user.model';
import { Notification } from '../../models/notification.model';
import { ReplayNotificationPage } from '../../pages/replay-notification/replay-notification';

@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class NotificationComponent implements OnInit{
  @Input() category:{id:number,name:string};
  @Input() cityId:number;
  @Input() notification:Notification;
  @Input() isReplay:boolean = false;

  user:User = new User(1,"Raed","Raed",3,"Raed.Khalaf@Exalt.ps","Ramallah","0568242014",1,"raed.profile.jpg");
  loggedUser:User = new User(1, "Nabeel","Nabeel",2,"Nabeel.Khalaf","Ramallah","0598303257",1,"nabeel.profile.jpg");
  constructor(public navController:NavController) {
  }
  
  ngOnInit(){
  }

  replayNotification(){
    this.navController.push(ReplayNotificationPage, {
      notification: this.notification,
      notificationOwner: this.user,
      loggedUser: this.loggedUser,
      cityId:this.cityId,
      category:this.category
    });
  }
}
