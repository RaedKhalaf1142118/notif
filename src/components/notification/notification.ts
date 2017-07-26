import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user.model';
import { Notification } from '../../models/notification.model';
import { ReplayNotificationPage } from '../../pages/replay-notification/replay-notification';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class NotificationComponent implements OnInit{
  @Input() category:{id:number};
  @Input() notification:Notification;
  @Input() isReplay:boolean = false;
  private tempImgName:string = "raed.profile.jpg";
  
  user:User = new User(1,"Loading","",5,"Loading","","",1,"default.profile.png");
  
  
  constructor(
    public navController:NavController,
    public authService:AuthService,
    public usersService: UsersService
  ) {
  }
  
  ngOnInit(){
    this.usersService.getUser(this.notification.user_ID).subscribe( (user) => {
      user.user_img = this.tempImgName;  // this line is temp, in order to set the original user img.
      this.user = user;
    });
  }

  replayNotification(){
    this.navController.push(ReplayNotificationPage, {
      notification: this.notification,
      category:this.category
    });
  }

  canReplayToNotifications(){
    return this.authService.canReplayToNotifications();
  }
}
