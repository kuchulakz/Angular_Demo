import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Register } from '../Models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl='https://stunning-system-6xg5r9x9x4r3x4x4-3000.app.github.dev/student'

  constructor(private http:HttpClient) 
  { }

  registerStudent(r: Register):Observable<any>
  {
    return this.http.post(this.apiUrl,r)
  }

  viewStudent():Observable<any>
  {
    return this.http.get(this.apiUrl)
  }

  viewStudentsById(id: any):Observable<any>
  {
    return this.http.get(this.apiUrl+"/"+id)
  }

  deleteStudent(id:any):Observable<void>
  {
    return this.http.delete<void>(this.apiUrl+"/"+id)
  }

  updateStudent(r: Register):Observable<any>
  {
    return this.http.put(this.apiUrl+"/"+r.id,r)
  }
}
