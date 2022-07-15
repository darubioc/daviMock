import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import { BenefitsComponent } from './benefits/benefits.component';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component'
import {MatDialogModule} from '@angular/material/dialog';
import { PortfolioPurchaseResultComponent } from './portfolio-purchase-result/portfolio-purchase-result.component'; 
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BenefitsComponent,
    LifeInsuranceComponent,
    PortfolioPurchaseResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
