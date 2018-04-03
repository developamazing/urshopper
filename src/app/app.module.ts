import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MarketersComponent } from './marketers/marketers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ConsumeroffersComponent } from './consumeroffers/consumeroffers.component';
import { ConsumerofferbundlesComponent } from './consumerofferbundles/consumerofferbundles.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LikeFilterPipe } from './shared/filters/likeFilter.pipe';
import { ConsumerOfferFilterPipe } from './shared/filters/consumerOfferFilter.pipe';
import { DataService } from './shared/services/dataService';
import { Configuration } from './app.constants';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,

    ErrorComponent,
    LikeFilterPipe,
    ConsumerOfferFilterPipe,

    MarketersComponent,
    SuppliersComponent,
    ConsumeroffersComponent,
    ConsumerofferbundlesComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  providers:[
    Configuration, DataService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
