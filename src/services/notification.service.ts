import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

import { Category } from '../models/category.model';
import { Notification } from '../models/notification.model';
import { PATHS } from '../utils/constants';

@Injectable()
export class NotificationService{
    
    constructor(private http:Http){}

    getCategoryNotifications(category:Category): Observable<{notifications:Notification[] , category_ID:number[]}>{
        return this.http.get(PATHS.SERVER_CATEGORY_SUB_CATEGORIES+category.category_ID+PATHS.SERVER_CATEGORY_NOTIFICATION).map(response => response.json());
    }

    addNotification(data: {ntf_Date:Date , ntf_textContent: string , user_ID : number,ntf_categoryID:number , ntf_imgName?:string }): Observable<Notification>{
        return this.http.post(PATHS.SERVER_ADD_NOTIFICATIONS,data).map(response => response.json());
    }
}