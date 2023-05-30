import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.component.html',
  styleUrls: ['./stock-product.component.css']
})
export class StockProductComponent {
  @Input()
  parent!:FormGroup;
  get stocks(){
    return (this.parent.get('stock')as FormArray).controls;
  }
}
