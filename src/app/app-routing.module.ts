import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitsComponent } from './benefits/benefits.component';
import { PortfolioPurchaseResultComponent } from './portfolio-purchase-result/portfolio-purchase-result.component';

const routes: Routes = [
  
  {
    path:'',
    component: BenefitsComponent,
  },
  {
    path:'benefits',
    component: BenefitsComponent,
  }, {
    path:'portfolioResult',
    component: PortfolioPurchaseResultComponent,
  },/*{
    path:'/form',
    component: BenefitsComponent,
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
