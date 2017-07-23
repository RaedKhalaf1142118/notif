import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PATHS } from '../utils/constants';
import { User } from '../models/user.model';

@Injectable()
export class LoginService{
    constructor(private http:Http){}

    login(data:{user_email:string, user_password:string}) : Observable<any>{
        return this.http.post(PATHS.SERVER_USER,data).map(response => response.json());
    }
}