import { Component } from '@angular/core';
import { Department } from '../../Models/department';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from "../department-details/department-details.component";
import { DepartmentAddComponent } from "../department-add/department-add.component";
import { DepartmentUpdateComponent } from "../department-update/department-update.component";

@Component({
  selector: 'app-department-list',
  imports: [FormsModule, DepartmentDetailsComponent, DepartmentAddComponent, DepartmentUpdateComponent],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent {
  depts: Department[] = [
    new Department(1, 'IT', 'Cairo'),
    new Department(2, 'HR', 'Zagazig'),
    new Department(3, '.NET', 'Alex'),
  ];
  
  Dept : Department = new Department();
  
  showDetails(dept: Department) {
    this.Dept = dept;
  }

  updatedept: Department = new Department();

  update(dept: Department) {
    this.updatedept = dept;
  }
}
