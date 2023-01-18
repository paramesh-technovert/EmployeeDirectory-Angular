import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeDataService } from 'src/app/employee-data.service';
import { MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';

@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.css']
})
export class PopupCardComponent implements OnInit {
  public displayCard:any[];
  public subscription:Subscription;
  public email:string;
  public data:any;
  public edit_data:any;
  constructor(private dialogRef:MatDialog,private _employeeService:EmployeeDataService,@Inject(MAT_DIALOG_DATA) public data_email: string) {
    this.displayCard=this._employeeService.displayEmployees;
    this.subscription= this._employeeService.getData().subscribe((employeeData)=> this.displayCard= employeeData)
    this.email=data_email;
   }

   hidecard(){
    this.dialogRef.closeAll();
   }

   editDetails(email:string){
    this._employeeService.edit=1;
    this.dialogRef.closeAll();
    this.dialogRef.open(AddEmployeeComponent,{data:email});

   }

  ngOnInit(): void {
    this.data=this.displayCard.find(obj => {return obj.email == this.email});
  }

}
