import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
})
export class StockInventoryComponent{
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
    selector:this.createStock({}),
    stock:new FormArray([
      this.createStock({product_id:2,quantity:50}),
      this.createStock({product_id:5,quantity:150})
    ])
  });

  createStock(stock: any) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id,10)||""),
      quantity: new FormControl(stock.quantity||10)
    });
  }
  addStock(stock:any){
    const control=this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }
  removeStock({group,i}:{group:FormGroup,i:number}){
    const control=this.form.get('stock')as FormArray;
    control.removeAt(i);
  }
  onSubmit(){
  }
}
  