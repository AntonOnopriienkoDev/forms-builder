import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { CdkAccordionModule} from '@angular/cdk/accordion';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { PortalModule } from '@angular/cdk/portal';
import { reducers,metaReducers } from  '../app/store/index'




import { JwtInterceptor } from './auth/_helpers/jwt-intersepter';
import { ErrorInterceptor } from './auth/_helpers/error.intersepter';
import { fakeBackendProvider } from './auth/_helpers/fake-backend';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DragAndDropComponent } from './builder/drag-and-drop/drag-and-drop.component'
import { FieldAccordionComponent } from './builder/field-accordion/field-accordion.component';
import { FormAccordionComponent } from './builder/form-accordion/form-accordion.component';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { PortalComponent } from './portal/portal.component';
import { InputComponent } from './builder/fields/input.component';
import { SelectComponent } from './builder/fields/select.component';
import { ButtonComponent } from './builder/fields/button.component';
import { TextareaComponent } from './builder/fields/textarea.component';
import { CheckboxComponent } from './builder/fields/checkbox';



@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		DragAndDropComponent,
		FieldAccordionComponent,
		FormAccordionComponent,
		PortalComponent,
		InputComponent,
		SelectComponent,
		ButtonComponent,
		TextareaComponent,
		CheckboxComponent
   
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
	}),
	PortalModule
	 
	
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
