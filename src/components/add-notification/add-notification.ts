import { 
  Component, 
  Output, 
  EventEmitter,
  Input
 } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'add-notification',
  templateUrl: 'add-notification.html'
})
export class AddNotificationComponent {
  @Output() onCancel = new EventEmitter();
  @Input() categoryId;
  text: string;
  content:string;

  constructor(
    public authService:AuthService,
    public notificationService:NotificationService
  ) {
  }

  cancelAddingNotification(){
    this.onCancel.emit();
  }

  onAddNotification(){
    if(this.content.length >= 10){
      let data: {ntf_Date:Date , ntf_textContent: string , user_ID : number,ntf_categoryID:number , ntf_imgName?:string } = {
        ntf_Date: new Date(),
        ntf_textContent: this.content,
        user_ID: this.authService.getLoggedUserId(),
        ntf_categoryID: this.categoryId,
        ntf_imgName: ''
      };
      this.notificationService.addNotification(data).subscribe( () =>{
        console.log("Notification Added");
      });
    }else{

    }
  }
}
