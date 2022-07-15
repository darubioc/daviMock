import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LifeInsuranceComponent } from '../life-insurance/life-insurance.component';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {

  lifeInsurance : boolean =false;
  title={titleText:'Prueba',titleDescription:'Beneficios y Características'}
  constructor(public dialog: MatDialog,
    private router: Router) {}
  ngOnInit(): void {
  }

  openLifeInsuranceDialog(){
    this.dialog.open(LifeInsuranceComponent, {
      height: '358px',
      width: '335px',
      position: {bottom: '0%', left: '10%'},
    }).afterClosed().subscribe((resp) =>{
      console.log('resp: ',resp);
      
      this.lifeInsurance=resp;
      if(this.lifeInsurance===true){
        this.navigateToPortfolioResult()
      }
    });
  }
  
  navigateToPortfolioResult() {
    this.router.navigate(['/', 'portfolioResult']);
  }
}
