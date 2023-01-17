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
  public department_list:any=this._employeeService.department_list;
  public office_list:any=this._employeeService.office_list;
  public jobrole_list:any=this._employeeService.jobrole_list;
  public department:Subscription;
  public office:Subscription;
  public jobrole:Subscription;
  constructor(private _employeeService:EmployeeDataService) { 
    this.department=this._employeeService.getDepartment().subscribe((employeeData)=> this.department_list= employeeData);
    this.office=this._employeeService.getOffice().subscribe((employeeData)=> this.office_list= employeeData);
    this.jobrole=this._employeeService.getJobrole().subscribe((employeeData)=> this.jobrole_list= employeeData);
  }

  search(key:any,value:any){
    this._employeeService.displayemployees(key,value.toLowerCase());
  }

  ngOnInit(): void {
  }
}

