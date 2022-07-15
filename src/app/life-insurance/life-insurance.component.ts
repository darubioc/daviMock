import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.scss']
})
export class LifeInsuranceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <LifeInsuranceComponent>) { }

  ngOnInit(): void {
  }


  sendConfirmation(value: boolean) {
    this.dialogRef.close(value);
  }
  
}
