import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent 
{
  fg!: FormGroup
  status: boolean = false;

  constructor(private fb: FormBuilder,private ss: StudentService)
  {}

  onSubmit()
  {}

}
