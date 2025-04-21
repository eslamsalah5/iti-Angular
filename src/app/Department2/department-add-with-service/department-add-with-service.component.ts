import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DeptService } from '../../Services/dept.service';
import { Department } from '../../Models/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add-with-service',
  imports: [ReactiveFormsModule],
  templateUrl: './department-add-with-service.component.html',
  styleUrl: './department-add-with-service.component.css',
})
export class DepartmentAddWithServiceComponent {
  constructor(public deptSevice: DeptService, public router: Router) {}

  deptForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
  });

  get id() {
    return this.deptForm.get('id') as FormControl;
  }
  get name() {
    return this.deptForm.get('name') as FormControl;
  }
  get location() {
    return this.deptForm.get('location') as FormControl;
  }




  save() {
    this.deptSevice.addDepartment(new Department(this.id.value, this.name.value, this.location.value));
    this.router.navigate(['departments']);
  }
}
