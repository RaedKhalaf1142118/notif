import { Injectable } from "@angular/core";

import { Admin } from '../models/admin.model';

@Injectable()
export class AdminsService{
    private admins:Admin[] = [
        new Admin("Raed Khalaf","raed.profile.jpg",1,"Hospitals","its just time matter we change the world"),
        new Admin("Nabeel Khalaf","nabeel.profile.jpg",1,"Hospitals","Game of Thrones"),
        new Admin("Test Admin","test.profile.jpg",2,"Test","This is kust a testing Admin"),
        new Admin("Nabeel Khalaf","abdallah.profile.jpg",2,"Test","its just time matter we change the world"),
        new Admin("Raed Khalaf","raed.profile.jpg",3,"Hospitals","its just time matter we change the world"),
        new Admin("Nabeel Khalaf","nabeel.profile.jpg",3,"Deliver","Game of Thrones"),
    ];

    getAdmins(){
        return this.admins;
    }
}