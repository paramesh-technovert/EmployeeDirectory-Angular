import { Component } from '@angular/core';
import { Subscription } from "rxjs"
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { DepartmentService } from 'src/app/services/department.service';
import { JobtitleService } from 'src/app/services/jobtitle.service';
import { OfficeService } from 'src/app/services/office.service';
import { Employee } from 'src/app/modals/Employee';
@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css']
})
export class LeftContainerComponent {
  public departmentList: {} = this._departmentService.get();
  public officeList: {} = this._officeService.get();
  public jobroleList: {} = this._jobtitleService.get();
  public department: Subscription;
  public office: Subscription;
  public jobrole: Subscription;
  public subscription: Subscription;
  public employees: Employee[] = this._employeeService.employeeDetails;
  public viewmore: boolean = false;
  constructor(private _employeeService: EmployeeDataService, private _departmentService: DepartmentService, private _jobtitleService: JobtitleService, private _officeService: OfficeService) {
    this.subscription = this._employeeService.getEmployees().subscribe((employeeData) => { this.employees = employeeData; this.updated() })
    this.updated();
  }

  search(key: string, value: string) {
    this._employeeService.displayEmployees(key, value.toLowerCase());
  }
  updated() {
    this.departmentList = this._departmentService.get();
    this.officeList = this._officeService.get();
    this.jobroleList = this._jobtitleService.get();
    for (let employee of this.employees) {
      this.departmentList[employee.department] += 1;
      this.officeList[employee.officeName] += 1;
      this.jobroleList[employee.jobTitle] += 1;
    }
  }
}

