import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionsComponent } from './admissions/admissions.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admissions',component:AdmissionsComponent},
  {path:'courses',component:CoursesComponent},
  {path:'result',component:ResultComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
