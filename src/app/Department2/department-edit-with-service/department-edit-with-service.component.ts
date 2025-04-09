import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeptService } from '../../Services/dept.service';
import { Department } from '../../Models/department';

@Component({
  selector: 'app-department-edit-with-service',
  imports: [FormsModule],
  templateUrl: './department-edit-with-service.component.html',
  styleUrl: './department-edit-with-service.component.css',
})
export class DepartmentEditWithServiceComponent {
  constructor(public departmentService: DeptService) {}

  @Input()
  dept = new Department();


  update() {
    this.departmentService.updateDepartment(this.dept);
    // this.dept = new Department();
  }
}
