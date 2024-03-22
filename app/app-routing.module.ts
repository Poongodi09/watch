import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
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
import { NavComponent } from './nav/nav.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WarrantyComponent } from './warranty/warranty.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'boys', component: BoysComponent },
  { path: 'girls', component: GirlsComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'chain', component: ChainComponent },
  { path: 'style', component: StyleComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'sonata', component: SonataComponent },
  { path: 'fastrack', component: FastrackComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'nav', component: NavComponent },
  { path: 'policy', component: PrivacyComponent },
  { path: 'warranty',component: WarrantyComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
