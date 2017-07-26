import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PrivilegeRequest } from '../../models/privilege-request.model';
import { PrivilegeService } from '../../services/privilege.service';

@Component({
  selector: 'page-privilege-requests',
  templateUrl: 'privilege-requests.html',
})
export class PrivilegeRequestsPage implements OnInit{
  requests: PrivilegeRequest[] = undefined;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public privilegeService:PrivilegeService
  ) {}

  ngOnInit(){
    this.requests = this.privilegeService.getPrivilegeRequests();
  }

  getRandomNumber(i){
    let tempNumber = (((.3*i)+.2)%.2);
    return tempNumber > .15?tempNumber:tempNumber+(.2-tempNumber);
  }
}
