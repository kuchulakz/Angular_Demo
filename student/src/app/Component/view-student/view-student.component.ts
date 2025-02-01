import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable, of } from 'rxjs';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent 
{
  data$: Observable<any[]> = of([])
  filteredData$: Observable<any[]> = of([])
  singleStudent: boolean= false

  constructor(private ss:StudentService, private rou:Router)
  {
    this.viewAllStudent();
  }

  viewAllStudent()
  {
    this.data$= this.ss.viewStudent();
    this.filteredData$= this.data$
  }

  viewById(id:any)
  {
    
    console.log("id is"+id)
    this.singleStudent=true;
    this.ss.viewStudentsById(id).subscribe(r=>this.data$=of([r]));
    // this.rou.navigate([`/view/${id}`])
    
  }

  updateStudent(id: any)
  {
    // this.rou.navigate(`[update]${id}`)
  }

  deleteStudent(id:any)
  {
    console.log(id)
    this.ss.deleteStudent(id).subscribe
    (
      (data)=>{this.viewAllStudent()}
    )
  }
  
}
