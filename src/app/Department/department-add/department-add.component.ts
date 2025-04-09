import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from '../../Models/department';
import { FormsModule } from '@angular/forms';
import { DepartmentUpdateComponent } from "../department-update/department-update.component";

@Component({
  selector: 'app-department-add',
  imports: [FormsModule],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css',
})
export class DepartmentAddComponent {
  @Output()
  onAdd: EventEmitter<Department> = new EventEmitter<Department>();


  dept: Department = new Department();

  save() {
    if (!this.dept.name || !this.dept.location) return;
    this.onAdd.emit(this.dept);
    this.dept = new Department();
  }

}
