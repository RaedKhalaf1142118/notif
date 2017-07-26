import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';
import { PATHS } from '../utils/constants';

@Injectable()
export class UsersService{
    
    constructor(
        private http:Http
    ){}

    getUser(id:number): Observable<User>{
        return this.http.get(PATHS.SERVER_GET_USERS+id).map(response => response.json());
    }
}