import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Register } from 'src/app/Models/register';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit
{
  fg!:FormGroup;
  status:boolean=false;
  students: Register[] = []
  constructor(private fb: FormBuilder, private ss:StudentService)
  {}

  onSubmit()
  {
    if(this.fg.valid)
    {
      this.status = true;
      console.log("Valid")
      this.ss.registerStudent(this.fg.value).subscribe(
        (data) => {this.students = data}
      )
    }
  }

  ngOnInit(): void //connect the html to the ts
  {    
    this.fg=this.fb.group(
      {
        name:['',[Validators.required]],
        mail:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required,this.phoneVal]],
        dob:['',[Validators.required,this.dobVal]]
      }
    )
  }

  phoneVal(con:AbstractControl): ValidationErrors | null
  {
    const phpattern =/^[6-9]\d{1}[0-9]\d{7}$/
    if(!phpattern.test(con.value))  //checking the pattern is same or not
    {
      return{ret:true}
    }
    return null
  }

  dobVal(con: AbstractControl): ValidationErrors | null
  {
    const dobpattern=/^\d{4}-\d{2}-\d{2}$/
    if(!dobpattern.test(con.value))
    {
      return {ret:true}
    }
    return null
  }

}
