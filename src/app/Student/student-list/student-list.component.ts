import { Component } from '@angular/core';
import { StudentService } from '../../Services/student.service';
import { Student } from '../../Models/student';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  constructor(public studentService: StudentService) {}

  MyStudents: Student[] = [];
  ngOnInit(): void {
    // this.students = this.studentService.getStudents();
    this.studentService
      .getStudents()
      .subscribe((data) => {
        this.MyStudents = data;
        console.log(this.MyStudents

        );
      });
  }
  // editStudent(id: number) {
  //   this.studentService.updateStudent(id);
  //   this.ngOnInit();
  // }
  
  // addStudent() {
  //   this.studentService.addStudent();
  //   this.ngOnInit();
  // }
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      (data) => {
        
        this.ngOnInit();   
      }
    );
  }
}
