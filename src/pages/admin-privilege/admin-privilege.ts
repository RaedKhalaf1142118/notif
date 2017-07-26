import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PrivilegeService } from '../../services/privilege.service';
import { PrivilegeRequestsPage } from '../privilege-requests/privilege-requests';

@Component({
  selector: 'page-admin-privilege',
  templateUrl: 'admin-privilege.html',
})
export class AdminPrivilegePage implements OnInit{
  privileges: { title:string, categories:{title:string,description:string, img:string}[]}[];
  requestsSize:number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public privilegeService:PrivilegeService
  ) {
  }

  ngOnInit(){
    this.privileges = this.privilegeService.getAllPrivilages();
    this.requestsSize = this.privilegeService.getPrivilegeRequestsSize();
  }

  showPrivilegeRequests(){
    this.navCtrl.push(PrivilegeRequestsPage);
  }

}
