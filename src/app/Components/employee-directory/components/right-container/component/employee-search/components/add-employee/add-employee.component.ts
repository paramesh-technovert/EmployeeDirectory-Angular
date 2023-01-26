import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/modals/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public displayCard: any[];
  public form!: FormGroup;
  public imageUrl: string;
  public data: Employee;
  public submitted: boolean = false;
  public email: string;
  constructor(private dialogRef: MatDialog, private service: EmployeeDataService, @Inject(MAT_DIALOG_DATA) public dataEmail: string) {
    this.displayCard = this.service.displayEmployee;
    this.email = dataEmail;
  }

  ngOnInit(): void {
    if (this.service.edit === 1) {
      this.data = this.displayCard.find(obj => { return obj.email == this.email });
      this.form = new FormGroup({
        prefferedName: new FormControl(this.data.prefferedName, [Validators.required, Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        firstName: new FormControl(this.data.firstName, [Validators.required, Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        lastName: new FormControl(this.data.lastName, [Validators.required, Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        email: new FormControl(this.data.email, [Validators.required, Validators.pattern(`^[a-zA-Z0-9][a-zA-Z0-9_.-]*@[a-zA-Z0-9]+(.[a-zA-Z]+)+$`)]),
        jobTitle: new FormControl(this.data.jobTitle, Validators.required),
        officeName: new FormControl(this.data.officeName, Validators.required),
        department: new FormControl(this.data.department, Validators.required),
        phoneNumber: new FormControl(this.data.phoneNumber, [Validators.required, Validators.pattern(`^[0-9]{10}$`)]),
        skypeId: new FormControl(this.data.skypeId, Validators.required)
      });
      this.imageUrl = this.data.imageUrl;
    }
    else {
      this.imageUrl = "assets/user.jpg";
      this.form = new FormGroup({
        prefferedName: new FormControl('', [Validators.required, Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        firstName: new FormControl('', [Validators.required, Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        lastName: new FormControl('', [Validators.required, Validators.pattern(`^[a-zA-Z][a-zA-Z ]*$`)]),
        email: new FormControl('', [Validators.required, Validators.pattern(`^[a-zA-Z0-9][a-zA-Z0-9_.-]*@[a-zA-Z0-9]+(.[a-zA-Z]+)+$`)]),
        jobTitle: new FormControl('', Validators.required),
        officeName: new FormControl('', Validators.required),
        department: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern(`^[0-9]{10}$`)]),
        skypeId: new FormControl('', Validators.required)
      });
    }
  }

  get formdata() {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.form.value.imageUrl = this.imageUrl;
    if (this.service.edit == 0) {
      if (this.form.valid) {
        this.service.employeeDetails.push(this.form.value);
        this.service.updated();
        this.dialogRef.closeAll();
      }
    }
    else {
      if (this.form.valid) {
        var index = this.service.employeeDetails.findIndex(obj => (obj.email == this.data.email));
        this.service.employeeDetails[index] = this.form.value;
        this.service.edit = 0;
        this.service.updated();
        this.dialogRef.closeAll();
      }
    }
  }
  remove() {
    this.imageUrl = "assets/user.jpg";
  }
  previewFile($event: any) {
    var file = $event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = (e) => {
      this.imageUrl = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
