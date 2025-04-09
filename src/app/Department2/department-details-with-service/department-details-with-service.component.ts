import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DeptService } from '../../Services/dept.service';
import { Department } from '../../Models/department';

@Component({
  selector: 'app-department-details-with-service',
  imports: [],
  templateUrl: './department-details-with-service.component.html',
  styleUrl: './department-details-with-service.component.css',
})
export class DepartmentDetailsWithServiceComponent implements OnChanges {
  constructor(public deptSevice: DeptService) {}

  dept = new Department();

  @Input()
  id = 1;

  flag: boolean = false;
 ngOnChanges(changes: SimpleChanges): void {
   this.dept = this.deptSevice.getDepartmentById(this.id);
   
  }

}
