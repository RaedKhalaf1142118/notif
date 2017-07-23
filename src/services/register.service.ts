import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user.model';
import { PATHS } from '../utils/constants';

@Injectable()
export class RegisterService{
    
    constructor(public http:Http){}

    register(data): Observable<any>{
        return this.http.post(PATHS.SERVER_REGISTER, data).map(response => response.json());
    }
}