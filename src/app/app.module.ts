import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { EventsComponent } from './components/events/events.component';
import { ConfectionersComponent } from './components/confectioners/confectioners.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ManufactoryComponent } from './components/manufactory/manufactory.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfectionerComponent } from './components/confectioner/confectioner.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdvantageComponent,
    EventsComponent,
    ConfectionersComponent,
    OrdersComponent,
    ManufactoryComponent,
    FooterComponent,
    ConfectionerComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
