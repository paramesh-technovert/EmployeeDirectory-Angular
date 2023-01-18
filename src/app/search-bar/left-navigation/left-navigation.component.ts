import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/employee-data.service';
import {Subscription} from "rxjs"

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {
  public employees:any;
  public departmentList:any=this._employeeService.departmentList;
  public officeList:any=this._employeeService.officeList;
  public jobroleList:any=this._employeeService.jobroleList;
  public department:Subscription;
  public office:Subscription;
  public jobrole:Subscription;
  constructor(private _employeeService:EmployeeDataService) { 
    this.department=this._employeeService.getDepartment().subscribe((employeeData)=> this.departmentList= employeeData);
    this.office=this._employeeService.getOffice().subscribe((employeeData)=> this.officeList= employeeData);
    this.jobrole=this._employeeService.getJobrole().subscribe((employeeData)=> this.jobroleList= employeeData);
  }

  search(key:any,value:any){
    this._employeeService.displayemployees(key,value.toLowerCase());
  }

  ngOnInit(): void {
  }
}

