import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, rootReducer, INITIAL_STATE} from './store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AlertComponent } from './_components/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TodoListComponent,
    TodoOverviewComponent,
    AlertComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);  }
}
