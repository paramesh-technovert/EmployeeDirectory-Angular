import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'; 
import { EmployeeDataService } from 'src/app/employee-data.service';
import { PopupCardComponent } from './popup-card/popup-card.component';
@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.css']
})

export class EmployeeCardsComponent implements OnInit {
  public display_card:any[];
  public subscription:Subscription;
  constructor(private dialogRef:MatDialog,private _employeeService:EmployeeDataService) {
    this.display_card=this._employeeService.display_employees;
    this.subscription= this._employeeService.getData().subscribe((employeeData)=> this.display_card= employeeData)
   }

   popup(i: string){
    this.dialogRef.open(PopupCardComponent,{data:i});
  }

  ngOnInit(): void {
  }

}
