import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeptService } from '../../Services/dept.service';
import { DepartmentDetailsWithServiceComponent } from "../department-details-with-service/department-details-with-service.component";
import { Department } from '../../Models/department';
import { DepartmentAddWithServiceComponent } from "../department-add-with-service/department-add-with-service.component";
import { DepartmentEditWithServiceComponent } from "../department-edit-with-service/department-edit-with-service.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department-list-with-service',
  imports: [
    FormsModule,
    DepartmentDetailsWithServiceComponent,
    DepartmentAddWithServiceComponent,
    DepartmentEditWithServiceComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './department-list-with-service.component.html',
  styleUrl: './department-list-with-service.component.css',
})
export class DepartmentListWithServiceComponent implements OnInit {
  constructor(public departmentService: DeptService) {}
  
  departments: Department[] = [];
  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }
  
  deptId = 1;
  
  updatedept: Department = new Department();
  
  update(dept: Department) {
    this.updatedept = dept;
  }
  delete(dept: Department) {
    this.departmentService.deleteDepartment(dept.id!);
  }

}
