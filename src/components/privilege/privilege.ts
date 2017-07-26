import { Component, Input } from '@angular/core';
import { 
  ActionSheetController,
  AlertController
} from 'ionic-angular';

import { Category } from '../../models/category.model';

@Component({
  selector: 'privilege',
  templateUrl: 'privilege.html'
})
export class PrivilegeComponent {
  @Input() privilege;

  constructor(
    public actionSheetController:ActionSheetController,
    public alertController: AlertController
  ) {}

  onCategoryClick(category:any){
    this.actionSheetController.create({
      title: category.title+' Action Sheet',
      buttons: [
        {
          text: 'delete',
          handler: () => {
            // TO-DO add the remove privilege logic
            setTimeout(() => {
              this.alertController.create({
                title: 'removed successfuly',
                message: 'waiting for the backend'
              }).present()
            }, 200);
          }
        }
      ]
    }).present();
  }
}
