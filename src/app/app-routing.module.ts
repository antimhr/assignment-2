import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {path : 'users', component: UserComponent},
  {path : 'login', component: LoginpageComponent},
  {path : 'welcome', component: WelcomeComponent},
  {path : 'view-detail', component: ViewDetailsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }