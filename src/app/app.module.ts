import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataService } from './services/employee-data.service';
import { HeaderComponent } from './Components/header/header.component';
import { EmployeeDirectoryrComponent } from './Components/employee-directory/employee-directory.component';
import { LeftContainerComponent } from './Components/employee-directory/components/left-container/left-container.component';
import { RightContainerComponent } from './Components/employee-directory/components/right-container/right-container.component';
import { EmployeeSearchComponent } from './Components/employee-directory/components/right-container/component/employee-search/employee-search.component';
import { EmployeeCardsComponent } from './Components/employee-directory/components/right-container/component/employee-cards/employee-cards.component';
import { AddEmployeeComponent } from './Components/employee-directory/components/right-container/component/employee-search/components/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupCardComponent } from './Components/employee-directory/components/right-container/component/employee-cards/components/popup-card/popup-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeDirectoryrComponent,
    LeftContainerComponent,
    RightContainerComponent,
    EmployeeSearchComponent,
    EmployeeCardsComponent,
    AddEmployeeComponent,
    PopupCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent],
  entryComponents: [AddEmployeeComponent]
})
export class AppModule { }
