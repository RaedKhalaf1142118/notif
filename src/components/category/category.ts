import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategoryDetailPage } from '../../pages/category-detail/category-detail';

@Component({
  selector: 'category',
  templateUrl: 'category.html'
})
export class CategoryComponent {
  @Input() category;

  constructor(public navController:NavController) {
  }

  viewCategory(){
    this.navController.push(CategoryDetailPage, {
      category: this.category
    });
  }
}