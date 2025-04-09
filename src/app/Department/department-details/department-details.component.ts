import { Component, Input } from '@angular/core';
import { Department } from '../../Models/department';

@Component({
  selector: 'app-department-details',
  imports: [],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css',
})
export class DepartmentDetailsComponent {

  @Input()
  dept: Department = new Department();


}
