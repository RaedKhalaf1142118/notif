import { Injectable, OnInit, EventEmitter, Output } from '@angular/core';

import { User } from '../models/user.model';

@Injectable()
export class AuthService implements OnInit{
    private isLoggedIn = false;
    userLogged:User;
    @Output() onLogged = new EventEmitter();

    saveUser(data:User){    
        data.user_password = '';
        localStorage.setItem('user',JSON.stringify(data));
        this.isLoggedIn = true;
        this.onLogged.emit();
    }

    ngOnInit(){
        if(localStorage.getItem('user') != null){
            this.userLogged = JSON.parse(localStorage.getItem('user'));
        }
    }

    getLoggedUser(){
        if(localStorage.getItem('user') != null){
            this.userLogged = JSON.parse(localStorage.getItem('user'));
        }
        return this.userLogged;
    }

    isLogged(): boolean{
        if(localStorage.getItem('user') != null){
            return true;
        }
        return false;
    }

    logout(){
        localStorage.removeItem('user');
        this.userLogged = undefined;
    }

    isAdminLogged(){
        // TO-DO add the isAdmin Logged logic
        let loggedUser = this.getLoggedUser();
        return loggedUser == undefined? false : loggedUser.user_Type == 1;
    }
    
    canAddNotification(){
        // TO-DO add the canAddNotification logic
        return this.isLogged();
    }

    canReplayToNotifications(): boolean{
        // TO-DO add the canReplayToNotifications logic
        return this.isLogged();
    }

    getLoggedUserId(): number{
        return JSON.parse(localStorage.getItem('user')).user_ID;
    }

    isNormalUserLogged(): boolean{
        let loggedUser = this.getLoggedUser();
        return loggedUser == undefined? false: loggedUser.user_Type == 2;
    }
}