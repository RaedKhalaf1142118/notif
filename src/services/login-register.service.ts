import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LoginRegisterService{
    @Output() onSignUp = new EventEmitter();

    goToSignUp(){
        this.onSignUp.emit();
    }
}