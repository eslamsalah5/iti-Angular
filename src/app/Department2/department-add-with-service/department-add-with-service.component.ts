import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeptService } from '../../Services/dept.service';
import { Department } from '../../Models/department';

@Component({
  selector: 'app-department-add-with-service',
  imports: [FormsModule],
  templateUrl: './department-add-with-service.component.html',
  styleUrl: './department-add-with-service.component.css',
})
export class DepartmentAddWithServiceComponent {
  constructor(public deptSevice: DeptService) { }
  
  dept = new Department();

 save() {
   this.deptSevice.addDepartment(this.dept);
   this.dept = new Department();
  }
}
