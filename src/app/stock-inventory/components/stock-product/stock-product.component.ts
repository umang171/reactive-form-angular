import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.component.html',
  styleUrls: ['./stock-product.component.css']
})
export class StockProductComponent {
  @Input()
  parent!:FormGroup;
  @Input()
  map!:Map<number,Product>;
  @Output()
  remove:EventEmitter<any>=new EventEmitter();
  
  onRemove(group:any,i:any){
    this.remove.emit({group,i});
  }
  getProduct(id:number){
    return this.map.get(id);
  }
  get stocks(){
    return (this.parent.get('stock')as FormArray).controls;
  }
}
