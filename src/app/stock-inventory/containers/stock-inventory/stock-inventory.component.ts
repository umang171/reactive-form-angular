import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Item, Product } from '../../models/product.interface';
import { StockInventoryService } from '../../services/stock-inventory.service';
import { zip, Observable } from 'rxjs';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
})
export class StockInventoryComponent implements OnInit{
  product:Product[]=[];
  productMap!:Map<number,Product>;
  total!:number;
  constructor(private fb:FormBuilder,private stockService:StockInventoryService) {    
  }
  ngOnInit(): void {
    const cart=this.stockService.getCartItems();
    const products=this.stockService.getProductItems();
    zip(cart,products).subscribe(([cart,products]:[cart:Item[],products:Product[]])=>
    {
      const myMap=products.map<[number,Product]>(product=>[product.id,product]);
      this.productMap=new Map<number,Product>(myMap);
      this.product=products;
      cart.forEach(item=>this.addStock(item));
    });
    this.form.get('stock')
    ?.valueChanges
    .subscribe(value=>this.calucalteTotal(value as Item[]));
  }

  calucalteTotal(value:Item[]){
    console.log("call",value);
    const total = value.reduce((prev, next) => {
      const product = this.productMap.get(next.product_id);
      const price = product ? product.price : 0;
      return prev + (next.quantity * price);
    }, 0);
    this.total=total;
  }

  form=this.fb.group({
    store:this.fb.group({
      branch:'',
      code:''
    }),
    selector:this.createStock({}),
    stock:this.fb.array([])
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
  