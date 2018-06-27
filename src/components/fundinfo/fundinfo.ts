import { Component } from '@angular/core';

/**
 * Generated class for the FundinfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fundinfo',
  templateUrl: 'fundinfo.html'
})
export class FundinfoComponent {

  text: string;

  constructor() {
    console.log('Hello FundinfoComponent Component');
    this.text = 'Hello World';
  }

}
