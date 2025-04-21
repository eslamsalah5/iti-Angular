import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { Student } from '../../Models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent implements OnInit {
  constructor(
    public studentService: StudentService,
    public ar: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      // this.student = this.studentService.getStudentById(params['id']);
      // this.studentService.getStudentById(params['id']);
      // console.log(this.student);
      this.studentService.getStudentById(params['id']).subscribe((student) => {
        this.student = student;
        console.log(this.student);
      });
    });
  }
  student: Student = new Student();
}
