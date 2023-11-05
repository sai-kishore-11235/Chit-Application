import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChitListComponent } from './chit-list/chit-list.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ChitServiceService } from './chit-service.service';
import { ButtonModule } from 'primeng/button';
import { CreateChitComponent } from './create-chit/create-chit.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { MatNativeDateModule } from '@angular/material/core';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CardModule } from 'primeng/card';
import { EditChitComponent } from './edit-chit/edit-chit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChitListComponent,
    CreateChitComponent,
    AppNavbarComponent,
    EditChitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    MatNativeDateModule,
    CardModule

  ],
  providers: [ChitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
