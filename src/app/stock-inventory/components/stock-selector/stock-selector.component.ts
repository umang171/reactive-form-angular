import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent {
  @Input()
  parent!:FormGroup;
  @Input()
  products!:Product[];
  @Output()
  added:EventEmitter<any>=new EventEmitter();
  onAdd(){
    this.added.emit(this.parent.get('selector')?.value);
  }
}
