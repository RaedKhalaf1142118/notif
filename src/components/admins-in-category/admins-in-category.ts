import { Component } from '@angular/core';

/**
 * Generated class for the AdminsInCategoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'admins-in-category',
  templateUrl: 'admins-in-category.html'
})
export class AdminsInCategoryComponent {

  text: string;

  constructor() {
    console.log('Hello AdminsInCategoryComponent Component');
    this.text = 'Hello World';
  }

}
