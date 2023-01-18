import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public displayCard:any[];
  public form!: FormGroup;
  public imageUrl: any;
  public data:any;
  public submitted:boolean=false;
  public email:any;
  constructor(private dialogRef:MatDialog,private service:EmployeeDataService,@Inject(MAT_DIALOG_DATA) public dataEmail: string) {
    this.displayCard=this.service.displayEmployees;
    this.email=dataEmail;
   }

  ngOnInit(): void {
    if(this.service.edit===1){
    this.data=this.displayCard.find(obj => {return obj.email == this.email});
    this.form=new FormGroup({
      preffered_name:new FormControl(this.data.preffered_name,Validators.required),
      first_name:new FormControl(this.data.first_name,Validators.required),
      last_name:new FormControl(this.data.last_name,Validators.required),
      email:new FormControl(this.data.email,Validators.required),
      job_title:new FormControl(this.data.job_title,Validators.required),
      office_name:new FormControl(this.data.office_name,Validators.required),    
      department:new FormControl(this.data.department,Validators.required),
      phone_number:new FormControl(this.data.phone_number,Validators.required),
      skype_id:new FormControl(this.data.skype_id,Validators.required)
    });
    this.imageUrl=this.data.image_url;
    }
    else{
      this.form=new FormGroup({
        preffered_name:new FormControl('',[Validators.required,Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        first_name:new FormControl('',[Validators.required,Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        last_name:new FormControl('',[Validators.required,Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        email:new FormControl('',[Validators.required,Validators.pattern(`^[a-zA-Z0-9][a-zA-Z0-9_.-]*@[a-zA-Z0-9]+(.[a-zA-Z]+)+$`)]),
        job_title:new FormControl('',Validators.required),
        office_name:new FormControl('',Validators.required),    
        department:new FormControl('',Validators.required),
        phone_number:new FormControl('',[Validators.required,Validators.pattern(`^[0-9]{10}$`)]),
        skype_id:new FormControl('',Validators.required)
      });
    }
  }

  get formdata(){
    return this.form.controls;
  }
  onSubmit(){
    this.submitted=true;
    this.form.value.image_url=this.imageUrl;
    if(this.service.edit==0){
      if(this.form.valid){
      this.service.employeeDetails.push(this.form.value);
      this.service.updated();
      this.dialogRef.closeAll();
      }
    }
    else{
      if(this.form.valid){
      var index=this.service.employeeDetails.findIndex(obj => (obj.email==this.data.email));
      this.service.employeeDetails[index]=this.form.value;
      this.service.edit=0;
      this.service.updated();
      this.dialogRef.closeAll();
      }
    }
  }
  previewFile($event: any){
    var file=$event.target.files[0];
    const reader = new FileReader();

    reader.onloadend= (e) => {
       this.imageUrl=reader.result;
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
