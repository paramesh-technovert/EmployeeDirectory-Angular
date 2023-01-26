import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDataService } from 'src/app/services/employee-data.service';
import { PopupCardComponent } from './components/popup-card/popup-card.component';
import { Employee } from 'src/app/modals/Employee';
@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.css']
})

export class EmployeeCardsComponent {
  public displayCard: Employee[];
  public subscription: Subscription;
  constructor(private dialogRef: MatDialog, private _employeeService: EmployeeDataService) {
    this.displayCard = this._employeeService.displayEmployee;
    this.subscription = this._employeeService.getData().subscribe((employeeData) => this.displayCard = employeeData)
  }

  popup(i: string) {
    this.dialogRef.open(PopupCardComponent, { data: i });
  }

}
