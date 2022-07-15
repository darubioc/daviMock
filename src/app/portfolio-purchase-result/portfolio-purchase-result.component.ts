import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-purchase-result',
  templateUrl: './portfolio-purchase-result.component.html',
  styleUrls: ['./portfolio-purchase-result.component.scss']
})
export class PortfolioPurchaseResultComponent implements OnInit {
  title={titleText:'Compra de Cartera Móvil',titleDescription:'Resultado'}

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateHome(){
    this.router.navigate(['/']);
  }
}
