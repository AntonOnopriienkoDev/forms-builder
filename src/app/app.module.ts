import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { CdkAccordionModule} from '@angular/cdk/accordion';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { JwtInterceptor } from './_helpers/jwt-intersepter';
import { ErrorInterceptor } from './_helpers/error.intersepter';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component'
import { FieldAccordionComponent } from './field-accordion/field-accordion.component';
import { FormAccordionComponent } from './form-accordion/form-accordion.component';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './reducers';


import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';


@NgModule({
  declarations: [
   AppComponent,
   LoginComponent,
   HomeComponent,
	DragAndDropComponent,
  	FieldAccordionComponent,
   FormAccordionComponent,
   MyCounterComponent,
  ],
  imports: [
   BrowserModule,
   ReactiveFormsModule,
   HttpClientModule,
	appRoutingModule,
	DragDropModule,
	CdkAccordionModule,
	StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
	EffectsModule.forRoot([]),
	StoreRouterConnectingModule.forRoot(),
	StoreModule.forRoot(reducers, {
      metaReducers
    })
	 
	
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
