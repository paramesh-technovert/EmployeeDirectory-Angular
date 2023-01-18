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
  public filterValue: any="preffered_name";
  public searchValue: any="";
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
    this.filterValue=event;
    this._employeeService.displayemployees(this.filterValue,this.searchValue);
  }
  search(event: any){
    this.searchValue=event.toLowerCase();
    this._employeeService.displayemployees(this.filterValue,this.searchValue);
  }
}
