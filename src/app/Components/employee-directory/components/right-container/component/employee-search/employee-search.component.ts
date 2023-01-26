import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDataService } from 'src/app/services/employee-data.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  public alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  public filterValue: string = "prefferedName";
  public searchValue: string = "";
  constructor(private dialogRef: MatDialog, private _employeeService: EmployeeDataService) {
  }

  addEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "auto";
    dialogConfig.height = "auto";
    this.dialogRef.open(AddEmployeeComponent, dialogConfig);
  }

  filter(event: string) {
    this.filterValue = event;
    this._employeeService.displayEmployees(this.filterValue, this.searchValue);
  }
  search(event: string) {
    this.searchValue = event.toLowerCase();
    this._employeeService.displayEmployees(this.filterValue, this.searchValue);
  }
}
