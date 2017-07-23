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
        this.userLogged = data;
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
        return this.isLogged();
    }
}