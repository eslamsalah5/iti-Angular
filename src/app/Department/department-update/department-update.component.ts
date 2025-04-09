import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from '../../Models/department';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-update',
  imports: [FormsModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css'
})
export class DepartmentUpdateComponent {

  @Output()
  onUpdate : EventEmitter<Department> = new EventEmitter<Department>();

  @Input()
  dept: Department = new Department();
  
  onUpdateDept(dept: Department) {
    this.onUpdate.emit(dept);
    
  }
}
