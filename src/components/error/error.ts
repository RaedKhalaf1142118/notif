import { Component } from '@angular/core';

/**
 * Generated class for the ErrorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'error',
  templateUrl: 'error.html'
})
export class ErrorComponent {

  text: string;

  constructor() {
    console.log('Hello ErrorComponent Component');
    this.text = 'Hello World';
  }

}
