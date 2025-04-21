import { Injectable } from '@angular/core';
import { Student } from '../Models/student';
import { HttpClient } from '@angular/common/http';
import { AddStudent } from '../Models/add-student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(public httpClient: HttpClient) {}

  // Students: Student[] = [
  //   {
  //     id: 1,
  //     fullName: 'Eslam Salah',
  //     age: 23,
  //     email: 'eslam@gmail.com',
  //     departmentId: 1,
  //   },
  //   {
  //     id: 2,
  //     fullName: 'Ahmed samy',
  //     age: 24,
  //     email: 'Ahmed@in.com',
  //     departmentId: 1,
  //   },
  //   {
  //     id: 3,
  //     fullName: 'Sara Kamel',
  //     age: 26,
  //     email: 'sara@in.com',
  //     departmentId: 2,
  //   },
  // ];

  Students: Student[] = [];

  private baseUrl = 'https://localhost:7118/api/Student';

  getStudents() {
    return this.httpClient.get<Student[]>(this.baseUrl);
    // return this.Students;
  }

  getStudentById(id: number) {
    // return this.Students.find((s) => s.id == id) as Student;
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }

  addStudent(student: AddStudent) {
    // this.Students.push(student);
    return this.httpClient.post(this.baseUrl, student);
  }
  deleteStudent(id: number) {
    // this.Students = this.Students.filter((s) => s.id != id);
    // return this.httpClient.delete(`${this.baseUrl}/${id}`);
    console.log(`${this.baseUrl}/${id}`);
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  updateStudent(student: Student): void {
    this.Students = this.Students.map((s) =>
      s.id == student.id ? (s = student) : s
    );
  }
}
