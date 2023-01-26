import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../modals/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  public Employee: Employee
  public employeeDetails = [new Employee("Aman", "Aman", "Khare", "aman.k@technovert.com", "Product Engineer", "India", "IT Department", "7985673590", "aman_55", "./assets/aman.jpg")]
  public displayEmployee: Employee[];
  public edit: number = 0;
  public subject = new Subject<Employee[]>();
  public employees = new Subject<Employee[]>();
  constructor() {
    if (localStorage.getItem("data") == undefined) {
      localStorage.setItem("data", JSON.stringify(this.employeeDetails));
    }
    else {
      this.employeeDetails = JSON.parse(localStorage.getItem("data")!);
    }
    this.updated();
  }

  insertEmployee(data: Employee) {
    this.employeeDetails.push(data);
  }


  sendData(displayEmployee: Employee[]) {
    this.subject.next(displayEmployee)
  }

  getData(): Observable<Employee[]> {
    return this.subject.asObservable()
  }

  sendEmployees(employeeDetails: Employee[]) {
    this.employees.next(employeeDetails);
  }
  getEmployees(): Observable<Employee[]> {
    return this.employees.asObservable();
  }



  displayEmployees(filterValue: string, searchValue: string) {
    this.displayEmployee = [];
    for (let data of this.employeeDetails) {
      if ((data[filterValue].toLowerCase()).startsWith(searchValue)) {
        this.displayEmployee.push(data);
      }
    }
    this.sendData(this.displayEmployee);
  }

  updated() {
    this.displayEmployee = this.employeeDetails;
    this.displayEmployees("prefferedName", '');
    localStorage.setItem("data", JSON.stringify(this.employeeDetails));
    this.sendEmployees(this.employeeDetails);
  }
}