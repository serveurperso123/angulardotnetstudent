import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ShowStuComponent } from './student/show-stu/show-stu.component';
import { AddEditStuComponent } from './student/add-edit-stu/add-edit-stu.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ShowStuComponent,
    AddEditStuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
