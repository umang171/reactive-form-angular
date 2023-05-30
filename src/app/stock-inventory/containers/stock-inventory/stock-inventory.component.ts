import { Component, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
})
export class StockInventoryComponent implements OnChanges{
  product:Product[]=[
    {id:1,name:"Pen",price:5},
    {id:2,name:"Pencil",price:10},
    {id:3,name:"Scale",price:15},
    {id:4,name:"Eraser",price:8},
    {id:5,name:"Sharpner",price:3},
  ]
  form=new FormGroup({
    store:new FormGroup({
      branch:new FormControl(''),
      code:new FormControl('')
    }),
    selector:new FormGroup({
      product_id:new FormControl(''),
      quantity:new FormControl(10),
    }),
    stock:new FormArray([])
  });

  onSubmit(){
    console.log(this.form.value);
  }

  ngOnChanges(){

  }
}
  