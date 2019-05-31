import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards';
import { RegisterComponent } from './register';



const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
                                          // **canActivate: [AuthGuard],**
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},

  { path: 'login', component: LoginComponent, children: [
        { path: 'todo-overview', component: TodoOverviewComponent }
      ]},

      
  {path: 'register', component: RegisterComponent}
      
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
