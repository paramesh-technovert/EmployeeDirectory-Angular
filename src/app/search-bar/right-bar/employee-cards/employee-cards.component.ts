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
  public displayCard:any[];
  public subscription:Subscription;
  constructor(private dialogRef:MatDialog,private _employeeService:EmployeeDataService) {
    this.displayCard=this._employeeService.displayEmployees;
    this.subscription= this._employeeService.getData().subscribe((employeeData)=> this.displayCard= employeeData)
   }

   popup(i: string){
    this.dialogRef.open(PopupCardComponent,{data:i});
  }

  ngOnInit(): void {
  }

}
