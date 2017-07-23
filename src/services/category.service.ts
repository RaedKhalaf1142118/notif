import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { City } from '../models/city.model';
import { Category } from '../models/category.model';
import { PATHS } from '../utils/constants';

@Injectable()
export class CategoryService{
    constructor(private http:Http) {}

    getCityCategories(city:City): Observable<Category[]>{        
        return this.http.get(PATHS.SERVER_CITY_CATEGORIES+city.cityID).map(response => response.json());
    }

    getCategoryChildren(category: Category): Observable<Category[]>{
        return this.http.get(PATHS.SERVER_CATEGORY_SUB_CATEGORIES+category.category_ID).map(response => response.json());        
    }

    addCategory(data:{category_Name:string, description:string, cityID:number}, parentId?:number) : Observable<Category>{
        if(parentId){
            return this.http.post(PATHS.SERVER_ADD_SUB_CATEGORY,{category_Name:data.category_Name, description:data.description, cityID:data.cityID, parentID: parentId}).map(response => response.json());            
        }else{
            return this.http.post(PATHS.SERVER_ADD_PARENT_CATEGORY,data).map(response => response.json());
        }
    }
}