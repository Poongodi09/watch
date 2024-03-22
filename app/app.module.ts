import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { KidsComponent } from './kids/kids.component';
import { SportsComponent } from './sports/sports.component';
import { ChainComponent } from './chain/chain.component';
import { StyleComponent } from './style/style.component';
import { OffersComponent } from './offers/offers.component';
import { SonataComponent } from './sonata/sonata.component';
import { FastrackComponent } from './fastrack/fastrack.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './nav/nav.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WarrantyComponent } from './warranty/warranty.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    ContactComponent,
         ProductsComponent,
         BoysComponent,
         GirlsComponent,
         KidsComponent,
         SportsComponent,
         ChainComponent,
         StyleComponent,
         OffersComponent,
         SonataComponent,
         FastrackComponent,
         FooterComponent,
         NavComponent,
         PrivacyComponent,
         WarrantyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
BrowserAnimationsModule,
ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
