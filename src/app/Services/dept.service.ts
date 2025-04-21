import { Injectable } from '@angular/core';
import { Department } from '../Models/department';

@Injectable({
  providedIn: 'root',
})
export class DeptService {
  constructor() {}

  departments: Department[] = [
    new Department(1, 'HR', 'Cairo'),
    new Department(2, 'IT', 'Alex'),
    new Department(3, '.NET', 'Mansoura'),
  ];

  getDepartments(): Department[] {
    return this.departments;
  }

  getDepartmentById(id: number): Department {
    return this.departments.find((d) => d.id == id) as Department;
  }

  addDepartment(dept: Department): void {
   this.departments.push(dept);
  }

  updateDepartment(dept: Department): Department {
    let index = this.getDepartments().findIndex((d) => d.id === dept.id);
   this.departments[index] = dept;
    return dept;
  }

  deleteDepartment(id: number): void {
    let index = this.getDepartments().findIndex((d) => d.id === id);
    let deletedDepartment = this.getDepartments()[index];
    this.getDepartments().splice(index, 1);
  }
}


