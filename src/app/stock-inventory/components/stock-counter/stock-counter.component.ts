import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR={
  provide:NG_VALUE_ACCESSOR,
  useExisting:forwardRef(()=>StockCounterComponent),
  multi:true
}
@Component({
  selector: 'app-stock-counter',
  providers:[COUNTER_CONTROL_ACCESSOR],
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.css']
})
export class StockCounterComponent implements ControlValueAccessor{
  private onTouch!:Function;
  private onModelChange!:Function;
  focus:boolean=false;

  registerOnChange(fn: any): void {
    this.onModelChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn;
  }
  writeValue(obj: any): void {
    this.value=obj;
  }
  @Input()
  step:number=10;
  @Input()
  min:number=10;
  @Input()
  max:number=1000;
  value:number=10;

  onKeyDown(event: KeyboardEvent) {
    const handlers: { [key: string]: () => void } = {
      ArrowUp: () => this.increment(),
      ArrowDown: () => this.decrement(),
    };
    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }
  onBlur(event:FocusEvent)
  {
    this.focus=false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }
  onFocus(event:FocusEvent)
  {
    this.focus=true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }
  increment(){
    if(this.value<this.max){
      this.value=this.value+this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
  decrement(){
    if(this.min<this.value){
      this.value=this.value-this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}