import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../Models/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  imports: [FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css',
})
export class StudentUpdateComponent implements OnInit {
  constructor(
    public studentService: StudentService,
    public ar: ActivatedRoute,
    public router: Router
  ) { }

  student : Student = {} as Student;
  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      // this.student = this.studentService.getStudentById(params['id']);
    });
  }

  updateStudent() {
    // this.studentService.updateStudent(this.student);
    this.router.navigate(['/students']);
  }
  
  
  
  
}
