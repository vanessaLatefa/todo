import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [

  { path: '', redirectTo: 'home/login', pathMatch: 'full' },
                                          // **canActivate: [AuthGuard]**
  {path: 'home', component: HomeComponent ,canActivate: [AuthGuard], children: [
      { path: 'login', component: LoginComponent, children: [
        { path: 'todo-overview', component: TodoOverviewComponent }
      ]},
      
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
