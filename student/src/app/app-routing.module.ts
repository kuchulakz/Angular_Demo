import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStudentComponent } from './Component/register-student/register-student.component';
import { ViewStudentComponent } from './Component/view-student/view-student.component';
import { UpdateStudentComponent } from './Component/update-student/update-student.component';

const routes: Routes = [
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'register', component:RegisterStudentComponent},
  {path:'view', component:ViewStudentComponent},
  {path:'view/:id', component:ViewStudentComponent},
  {path:'update/:id',component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
