import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.component.html',
  styleUrls: ['./stock-product.component.css']
})
export class StockProductComponent {
  @Input()
  parent!:FormGroup;
  @Output()
  remove:EventEmitter<any>=new EventEmitter();
  onRemove(group:any,i:any){
    this.remove.emit({group,i});
  }
  get stocks(){
    return (this.parent.get('stock')as FormArray).controls;
  }
}
