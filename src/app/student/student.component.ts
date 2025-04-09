import { Component } from '@angular/core';
import { Student } from '../Models/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  stds: Student[] = [
    new Student(1, 'Eslam', 20, 'Male', 'jy2XK@example.com', 1234567890),
    new Student(2, 'Ali', 21, 'Female', '2OY7M@example.com', 9876543210),
    new Student(3, 'Ahmed', 22, 'Male', '9X04F@example.com', 1111111111),
    new Student(4, 'Sara', 23, 'Female', '2s2Q3@example.com', 2222222222),
  ];
  
  std: Student = new Student();
  
  addStd() {
    this.stds.push(this.std);
    this.std = new Student(0, '', 0, '', '', 0);
  }
  getStd(index: number) {
    this.std = this.stds[index];
  }
  deleteStd(index: number) {
    this.stds.splice(index, 1);
    
  }
  
  updateStd(index: number) {
    this.stds[index] = this.std;
  }
  
}
