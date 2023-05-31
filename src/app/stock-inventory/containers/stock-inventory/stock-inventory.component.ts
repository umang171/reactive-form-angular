import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
})
export class StockInventoryComponent{
  constructor(private fb:FormBuilder) {    
  }
  product:Product[]=[
    {id:1,name:"Pen",price:5},
    {id:2,name:"Pencil",price:10},
    {id:3,name:"Scale",price:15},
    {id:4,name:"Eraser",price:8},
    {id:5,name:"Sharpner",price:3},
  ]
  form=this.fb.group({
    store:this.fb.group({
      branch:'',
      code:''
    }),
    selector:this.createStock({}),
    stock:this.fb.array([
      this.createStock({product_id:2,quantity:50}),
      this.createStock({product_id:5,quantity:150})
    ])
  });

  createStock(stock: any) {
    return this.fb.group({
      product_id: parseInt(stock.product_id,10)||"",
      quantity: stock.quantity||10
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
  