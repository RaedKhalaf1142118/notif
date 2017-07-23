import { Component, OnInit, ViewChild } from '@angular/core';
import { 
  NavController, 
  NavParams, 
  AlertController,
  LoadingController,
  ToastController
} from 'ionic-angular';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
//import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service'; 
import { LocationService } from '../../services/location.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-category-detail',
  templateUrl: 'category-detail.html',
})
export class CategoryDetailPage implements OnInit{
  category: Category = undefined;
  currentTab = "notification";
  subCategories:Category[] = undefined;
  categories_notifications:any[] = undefined;
  isAddNotification = false;
  @ViewChild('notificationContent') ntfContent;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public categoryService:CategoryService, 
    public notificationService:NotificationService,
    public alertController: AlertController,
    public loadingController:LoadingController,
    public locationService:LocationService,
    public authService:AuthService,
    public toastController:ToastController
  ) {
  }

  ngOnInit(){
    this.category = this.navParams.get('category');
    //this.categoryService.getCategoryChildren(this.category).subscribe( (categories:any) => {
     // this.subCategories = categories.categories;
   // });
    setTimeout(() => {
      this.notificationService.getCategoryNotifications(this.category).subscribe( (notifications:any) => {
        this.categories_notifications = notifications.allNotifications;
      });
    }, 500);
  }

  addCategory(){
    this.alertController.create({
      title: 'New Category',
      inputs: [
        {
          name:'category_Name',
          placeholder: 'category name'
        },
        {
          name: 'description',
          placeholder:'Category description'
        }
      ],
      buttons: [
        {
          text: 'Add',
          handler: (data) =>{
            let loading = this.loadingController.create({
              content: 'Please wait...'
            });
            loading.present();
            this.categoryService.addCategory({category_Name:data.category_Name,description:data.description, cityID:this.locationService.currentCity.cityID},this.category.category_ID).subscribe( (category) => {
              this.subCategories.push(category);
              loading.dismiss();
            });
          }
        },
        {
          text: 'Cancel'
        }
      ]
    }).present();
  }

  addNotification(){
    this.isAddNotification = !this.isAddNotification;
    console.log(this.isAddNotification);
  }

  onAddNotification(){
    let content = this.ntfContent.value;
    let userId = this.authService.getLoggedUser().user_ID;
    // TO-DO => Add the Notification Img
    let loading = this.loadingController.create({
      content: "Please wait ..."
    });
    loading.present();
    this.notificationService.addNotification({ntf_textContent:content, user_ID: userId, ntf_categoryID: this.category.category_ID}).subscribe( (data) => {
      loading.dismiss();
      this.toastController.create({
        message:'Notification Added successfully',
        duration: 1500
      }).present;
    });
  }
  canAddCategory(){
    return this.authService.isAdminLogged();
  }
}