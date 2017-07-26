import { Component, OnInit } from '@angular/core';
import { 
  NavController, 
  NavParams,
  AlertController
} from 'ionic-angular';

import { PrivilegeService } from '../../services/privilege.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-privilege',
  templateUrl: 'privilege.html',
})
export class PrivilegePage implements OnInit{
  privileges: { title:string, categories:{title:string,description:string, img:string}[]}[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private privilegeService:PrivilegeService,
    public alertController:AlertController,
    public authService:AuthService
  ) {
  }

  ngOnInit(){
    this.privileges = this.privilegeService.getUserPrivileges(this.authService.getLoggedUserId());
  }

  requestPrivilege(){
    let requestAlert = this.alertController.create({
      title: 'Request Privillege',
      inputs: [
        {
          name:'name',
          placeholder: 'privilege Name',
          type: 'text'
        },
        {
          name: 'description',
          placeholder:'request description',
          type:'text'
        }
      ],
      buttons: [
        {
          text: 'send',
          handler: (data) => {
            if(data.name.length > 0 && data.description.length > 0){
              // TO-DO send the request to the server, this notify the user that it was successfully added.
            }else{
              setTimeout(() => {                
                this.alertController.create({
                  title: 'Invalid information',
                  message: 'please fill the request with valid information'
                }).present();
              }, 200);
            }
          }
        },
        {
          text: 'cancel'
        }
      ]
    });
    requestAlert.present();
  }
}
