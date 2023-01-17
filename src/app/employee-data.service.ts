import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  public employee_details=[{"preferred_name":"Aman","first_name":"Aman","last_name":"Khare","email":"aman.k@technovert.com","job_title":"Product Engineer","office_name":"India","department":"IT Department","phone_number":"7985673590","skype_id":"aman_55","image_url":"./assets/aman.jpg"}];;
  public department_list:any;
  public office_list:any;
  public jobrole_list:any;
  public display_employees:any;
  public edit:number=0;
  constructor() {
    if(localStorage.getItem("data")==undefined){
      localStorage.setItem("data",JSON.stringify(this.employee_details));
    }
    else{
      this.employee_details=JSON.parse(localStorage.getItem("data")!);
    }
    this.updated();
  }
  insertEmployee(data: any){
    this.employee_details.push(data);
  }

  public subject=new Subject<any>();
    sendData(display_employees: any){
      this.subject.next(display_employees)
    }

    getData():Observable<any>{
      return this.subject.asObservable()
    }

    public department=new Subject<any>();
    sendDepartment(department_list: any){
      this.department.next(department_list)
    }

    getDepartment():Observable<any>{
      return this.department.asObservable()
    }

    public office=new Subject<any>();
    sendOffice(office_list: any){
      this.office.next(office_list)
    }

    getOffice():Observable<any>{
      return this.office.asObservable()
    }

    public jobrole=new Subject<any>();
    sendJobrole(jobrole_list: any){
      this.jobrole.next(jobrole_list)
    }

    getJobrole():Observable<any>{
      return this.jobrole.asObservable()
    }

  displayemployees(filtervalue:string,searchvalue:string){
    this.display_employees=[];
    for(let data of this.employee_details){
      if((data[filtervalue as keyof typeof data].toLowerCase()).startsWith(searchvalue)){
          this.display_employees.push(data);
      }
    }
    this.sendData(this.display_employees);
  }

  updated(){
    this.display_employees=this.employee_details;
    this.displayemployees("preferred_name",'');
    localStorage.setItem("data",JSON.stringify(this.employee_details));
    this.department_list={};
    this.jobrole_list={};
    this.office_list={};
    for(let employee of this.employee_details){
      if(this.department_list[employee["department" as keyof typeof employee] as keyof typeof this.department_list]==undefined){
        this.department_list[employee["department" as keyof typeof employee] as keyof typeof this.department_list]=1
      }
      else{
        this.department_list[employee["department" as keyof typeof employee] as keyof typeof this.department_list]+=1
      }
      if(this.jobrole_list[employee["job_title" as keyof typeof employee] as keyof typeof this.jobrole_list]==undefined){
        this.jobrole_list[employee["job_title" as keyof typeof employee] as keyof typeof this.jobrole_list]=1
      }
      else{
        this.jobrole_list[employee["job_title" as keyof typeof employee] as keyof typeof this.jobrole_list]+=1
      }
      if(this.office_list[employee["office_name" as keyof typeof employee] as keyof typeof this.office_list]==undefined){
        this.office_list[employee["office_name" as keyof typeof employee] as keyof typeof this.office_list]=1
      }
      else{
        this.office_list[employee["office_name" as keyof typeof employee] as keyof typeof this.office_list]+=1
      }
    }
    this.sendDepartment(this.department_list);
    this.sendOffice(this.office_list);
    this.sendJobrole(this.jobrole_list);
  }
}