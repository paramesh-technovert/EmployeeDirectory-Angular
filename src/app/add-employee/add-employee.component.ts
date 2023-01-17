import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { NgForm } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public display_card:any[];
  public imageurl: any;
  public data:any;
  public email:any;
  constructor(private dialogRef:MatDialog,private service:EmployeeDataService,@Inject(MAT_DIALOG_DATA) public data_email: string) {
    this.display_card=this.service.display_employees;
    this.email=data_email;
   }

  ngOnInit(): void {
    if(this.service.edit===1){
    this.data=this.display_card.find(obj => {return obj.email == this.email});
    this.imageurl=this.data.image_url;
    }
    else{
      this.data={"preferred_name":"","first_name":"","last_name":"","email":"","job_title":"","office_name":"","department":"","phone_number":"","skype_id":"","image_url":""}
    }
  }
  onSubmit(form : NgForm){
    form.value.image_url=this.imageurl;
    if(this.service.edit==0){
      this.service.employee_details.push(form.value);
    }
    else{
      var index=this.service.employee_details.findIndex(obj => (obj.email==this.data.email));
      this.service.employee_details[index]=form.value;
      this.service.edit=0;
    }
    this.service.updated();
    this.dialogRef.closeAll();
  }
  previewFile($event: any){
    var file=$event.target.files[0];
    const reader = new FileReader();

    reader.onloadend= (e) => {
       this.imageurl=reader.result;
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
