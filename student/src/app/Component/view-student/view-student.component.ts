import { Component } from '@angular/core';
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

  constructor(private ss:StudentService)
  {
    this.viewAllStudent();
  }

  viewAllStudent()
  {
    this.data$= this.ss.viewStudent();
    this.filteredData$= this.data$
  }

  deleteStudent(id:any)
  {
    this.ss.delete(id).subscribe
    (
      () => {this.viewAllStudent()}
    )
  }
}
