import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDataService } from './employee-data.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LeftNavigationComponent } from './search-bar/left-navigation/left-navigation.component';
import { RightBarComponent } from './search-bar/right-bar/right-bar.component';
import { LeftSearchComponent } from './search-bar/right-bar/left-search/left-search.component';
import { EmployeeCardsComponent } from './search-bar/right-bar/employee-cards/employee-cards.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { PopupCardComponent } from './search-bar/right-bar/employee-cards/popup-card/popup-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SearchBarComponent,
    LeftNavigationComponent,
    RightBarComponent,
    LeftSearchComponent,
    EmployeeCardsComponent,
    AddEmployeeComponent,
    PopupCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent],
  entryComponents:[AddEmployeeComponent]
})
export class AppModule { }
