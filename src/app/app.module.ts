import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { StockInventoryService } from './stock-inventory/services/stock-inventory.service';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockInventoryModule,
    HttpClientModule
  ],
  providers: [
    StockInventoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
