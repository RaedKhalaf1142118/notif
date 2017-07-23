import { Component, OnInit } from '@angular/core';
import { 
  NavController, 
  NavParams, 
  ActionSheetController,
  AlertController,
  ToastController
 } from 'ionic-angular';
import { AdminsService } from '../../services/admins.service';

import { Admin } from '../../models/admin.model';

@Component({
  selector: 'page-admins',
  templateUrl: 'admins.html',
  providers: [AdminsService]
})
export class AdminsPage implements OnInit {
  adminsInCategories:{categoryName:string,admins:Admin[]}[];
  admins: Admin[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public adminsService:AdminsService,
    public actionSheetController:ActionSheetController,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
  }

  ngOnInit(){
    this.admins = this.adminsService.getAdmins();
    this.adminsInCategories = this.prepareAdmins(this.admins);
  }

  prepareAdmins(admins:Admin[]){
    let tempResult:{categoryName:string,admins:Admin[]}[] = [];
    let result:{categoryName:string,admins:Admin[]}[] = [];
    for(let admin of admins){
      try{
        tempResult[admin.category].admins.push(admin);
      }catch(any){
        let temp = {categoryName: admin.category,admins: [admin]};
        tempResult[admin.category] = temp;
        result.push(temp);
      }
    }
    return result;
  }

  openMenu(admin:Admin, adminCategory:{categoryName:string,admins:Admin[]}){
    this.actionSheetController.create({
      title: "Admin "+admin.name,
      buttons: [
        {
          text: 'Delete',
          role: 'destruction',
          icon: 'trash',
          handler: () => {
            this.alertController.create({
              title: 'Remove Admin',
              message: 'Are you sure you want to delete this Admin? '+(adminCategory.admins.length == 1?'this is the last admin in this category!':''),
              buttons: [
                {
                  text: 'Yes',
                  handler: () => {
                    adminCategory.admins.splice(adminCategory.admins.indexOf(admin),1);
                    this.toastController.create({
                      message: 'The deletion complete successfully',
                      duration: 1500,
                      position: 'top'
                    }).present();
                  }
                }, 
                {
                  text: 'No'
                }
              ]
            }).present();
          }
        }
      ]
    }).present();
  }

  showNewAdmin(adminCategory:{categoryName:string,admins:Admin[]}){
    this.alertController.create({
      title: "New Admin",
      inputs:[
        {
          name: 'username',
          placeholder: 'UserName'
        },
        {
          name: 'password',
          placeholder: '*****',
          type: 'password'
        },
        {
          name: 'bio',
          placeholder:'Bio',
        },
        {
          name: 'img',
          placeholder:'img',
          type:'file'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Register',
          handler: data => {
            let admin = new Admin(data.username,'raed.profile.jpg',1,adminCategory.categoryName,data.bio,data.password);
            adminCategory.admins.push(admin);
          }
        }
      ]
    }).present();
  }
}