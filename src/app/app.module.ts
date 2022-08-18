import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { EventsComponent } from './components/events/events.component';
import { ConfectionersComponent } from './components/confectioners/confectioners.component';
import { OrderComponent } from './components/order/order.component';
import { ManufactoryComponent } from './components/manufactory/manufactory.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdvantageComponent,
    EventsComponent,
    ConfectionersComponent,
    OrderComponent,
    ManufactoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
