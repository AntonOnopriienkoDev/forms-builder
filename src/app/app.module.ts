import { JwtInterceptor } from './_helpers/jwt-intersepter';
import { ErrorInterceptor } from './_helpers/error.intersepter';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FieldAccordionComponent } from './field-accordion/field-accordion.component';
import { FormAccordionComponent } from './form-accordion/form-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
	 DragAndDropComponent,

  FieldAccordionComponent,
  FormAccordionComponent,
  ],
  imports: [
   BrowserModule,
   ReactiveFormsModule,
   HttpClientModule,
	appRoutingModule,
	DragDropModule,
	CdkAccordionModule
	 
	
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
