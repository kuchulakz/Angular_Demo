import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStudentComponent } from './Component/register-student/register-student.component';
import { ViewStudentComponent } from './Component/view-student/view-student.component';

const routes: Routes = [
  {path:'register', component:RegisterStudentComponent},
  {path:'view', component:ViewStudentComponent},
  {path:'delete', component:ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
