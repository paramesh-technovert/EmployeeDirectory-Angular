import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  public employeeDetails=[{"preffered_name":"Aman","first_name":"Aman","last_name":"Khare","email":"aman.k@technovert.com","job_title":"Product Engineer","office_name":"India","department":"IT Department","phone_number":"7985673590","skype_id":"aman_55","image_url":"./assets/aman.jpg"}];;
  public departmentList:any;
  public officeList:any;
  public jobroleList:any;
  public displayEmployees:any;
  public edit:number=0;
  constructor() {
    if(localStorage.getItem("data")==undefined){
      localStorage.setItem("data",JSON.stringify(this.employeeDetails));
    }
    else{
      this.employeeDetails=JSON.parse(localStorage.getItem("data")!);
    }
    this.updated();
  }
  insertEmployee(data: any){
    this.employeeDetails.push(data);
  }

  public subject=new Subject<any>();
    sendData(displayEmployees: any){
      this.subject.next(displayEmployees)
    }

    getData():Observable<any>{
      return this.subject.asObservable()
    }

    public department=new Subject<any>();
    sendDepartment(departmentList: any){
      this.department.next(departmentList)
    }

    getDepartment():Observable<any>{
      return this.department.asObservable()
    }

    public office=new Subject<any>();
    sendOffice(officeList: any){
      this.office.next(officeList)
    }

    getOffice():Observable<any>{
      return this.office.asObservable()
    }

    public jobrole=new Subject<any>();
    sendJobrole(jobroleList: any){
      this.jobrole.next(jobroleList)
    }

    getJobrole():Observable<any>{
      return this.jobrole.asObservable()
    }

  displayemployees(filterValue:string,searchValue:string){
    this.displayEmployees=[];
    for(let data of this.employeeDetails){
      if((data[filterValue as keyof typeof data].toLowerCase()).startsWith(searchValue)){
          this.displayEmployees.push(data);
      }
    }
    this.sendData(this.displayEmployees);
  }

  updated(){
    this.displayEmployees=this.employeeDetails;
    this.displayemployees("preffered_name",'');
    localStorage.setItem("data",JSON.stringify(this.employeeDetails));
    this.departmentList={};
    this.jobroleList={};
    this.officeList={};
    for(let employee of this.employeeDetails){
      if(this.departmentList[employee["department" as keyof typeof employee] as keyof typeof this.departmentList]==undefined){
        this.departmentList[employee["department" as keyof typeof employee] as keyof typeof this.departmentList]=1
      }
      else{
        this.departmentList[employee["department" as keyof typeof employee] as keyof typeof this.departmentList]+=1
      }
      if(this.jobroleList[employee["job_title" as keyof typeof employee] as keyof typeof this.jobroleList]==undefined){
        this.jobroleList[employee["job_title" as keyof typeof employee] as keyof typeof this.jobroleList]=1
      }
      else{
        this.jobroleList[employee["job_title" as keyof typeof employee] as keyof typeof this.jobroleList]+=1
      }
      if(this.officeList[employee["office_name" as keyof typeof employee] as keyof typeof this.officeList]==undefined){
        this.officeList[employee["office_name" as keyof typeof employee] as keyof typeof this.officeList]=1
      }
      else{
        this.officeList[employee["office_name" as keyof typeof employee] as keyof typeof this.officeList]+=1
      }
    }
    this.sendDepartment(this.departmentList);
    this.sendOffice(this.officeList);
    this.sendJobrole(this.jobroleList);
  }
}