import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeptService } from '../../Services/dept.service';
import { Department } from '../../Models/department';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-edit-with-service',
  imports: [FormsModule],
  templateUrl: './department-edit-with-service.component.html',
  styleUrl: './department-edit-with-service.component.css',
})
export class DepartmentEditWithServiceComponent {
  constructor(
    public departmentService: DeptService,
    public ar: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.ar.params.subscribe((s) => {
      this.dept = this.departmentService.getDepartmentById(s['id']);
    });
  }

  @Input()
  dept = new Department();

  update() {
    this.departmentService.updateDepartment(this.dept);
    this.router.navigate(['departments']);

    // this.dept = new Department();
  }
}
