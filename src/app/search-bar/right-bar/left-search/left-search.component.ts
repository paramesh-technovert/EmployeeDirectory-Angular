import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog'; 
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';
import { EmployeeDataService } from 'src/app/employee-data.service';

@Component({
  selector: 'app-left-search',
  templateUrl: './left-search.component.html',
  styleUrls: ['./left-search.component.css']
})
export class LeftSearchComponent implements OnInit {
  public alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  public filtervalue: any="preferred_name";
  public searchvalue: any="";
  constructor(private dialogRef:MatDialog,private _employeeService:EmployeeDataService) { 
  }

  ngOnInit(): void {
  }

  addEmployee(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="auto";
    dialogConfig.height="auto";
    this.dialogRef.open(AddEmployeeComponent,dialogConfig);
  }

  filter(event: any){
    this.filtervalue=event;
    this._employeeService.displayemployees(this.filtervalue,this.searchvalue);
  }
  search(event: any){
    this.searchvalue=event.toLowerCase();
    this._employeeService.displayemployees(this.filtervalue,this.searchvalue);
  }
}
