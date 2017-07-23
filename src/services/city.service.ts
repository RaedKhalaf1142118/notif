import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LatLng } from '@ionic-native/google-maps';

import { PATHS } from '../utils/constants';
import { City } from '../models/city.model';
import { LocationService } from './location.service';

@Injectable()
export class CityService{

    constructor(private http:Http, private locationService:LocationService){}

    getCities(): Observable<City[]>{
        return this.http.get(PATHS.SERVER_CITIES_URL).map(response => response.json());
    }   

    getMyCity(cities:City[]){
        let myLocation:LatLng;
        this.locationService.getCurrentLocation( (lat,lng) => {
            myLocation = new LatLng(lat,lng);
            return this.getCity(myLocation, cities);
        });
    }   

    private getCity(myLocation:LatLng, cities:City[]){
        let minDis = Number.MAX_VALUE;
        let minCity = null;
        cities.map( city => {
            let cityLat:number = city.lat;
            let cityLng:number = city.lang;
            let distance = Math.sqrt(Math.pow(cityLat - myLocation.lat, 2) + Math.pow(cityLng - myLocation.lng, 2));
            if(distance <= city.radius){
                minDis = distance;
                minCity = city;
                return;
            }
        });
        return minCity;
    }
}