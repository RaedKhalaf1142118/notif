import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import {Diagnostic} from '@ionic-native/diagnostic';

import { City } from '../models/city.model';

@Injectable()
export class LocationService {
    currentCity:City;
    private  latitude: number = 31.8894302;
    private  longtitude: number = 35.2016661;

    constructor(private diagnostic:Diagnostic,private geolocation:Geolocation,) {
    }

    private  checkGPSAvailable(callback) {
        this.diagnostic.isLocationAvailable().then((res) => {
            if (!res) {
                alert("Please turn on GPS");
                this.diagnostic.switchToLocationSettings();
                callback();
            }
            else {
                callback();
            }
        });
    }
    public  getCurrentLocation(callback) {
        this.checkGPSAvailable(() => {
            this.geolocation.getCurrentPosition().then((position) => {
                this.longtitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
                callback(this.latitude, this.longtitude);
            }, (err) => {
                alert("Couldn't detect current location");
                callback(0, 0);
            });
        });
    }
}
