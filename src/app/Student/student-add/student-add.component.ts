import { Component } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { Student } from '../../Models/student';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddStudent } from '../../Models/add-student';


@Component({
  selector: 'app-student-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css',
})
export class StudentAddComponent {
  constructor(public studentService: StudentService, public router: Router) {}

  student = new AddStudent();
  Save(s: NgForm) {
    this.studentService.addStudent(this.student).subscribe((data) => {
      this.student = data;
      console.log(this.student);
      // console.log(s);
      this.router.navigate(['students']);
    }, (error) => console.log(error));
    // console.log(s);
    // this.studentService.addStudent(this.student);
    // this.router.navigate(['students']);
    // this.student = {} as Student;
  }
}
