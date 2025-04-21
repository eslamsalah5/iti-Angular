import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DeptService } from '../../Services/dept.service';
import { Department } from '../../Models/department';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details-with-service',
  imports: [],
  templateUrl: './department-details-with-service.component.html',
  styleUrl: './department-details-with-service.component.css',
})
export class DepartmentDetailsWithServiceComponent implements OnInit {
  constructor(public deptSevice: DeptService, public ar: ActivatedRoute) {
    
  }
  ngOnInit(): void {
   this.ar.params.subscribe(s=>{
    this.dept = this.deptSevice.getDepartmentById(s['id']);})
  }



  dept = new Department();

  // @Input()
  // id = 1;

  flag: boolean = true;
//  ngOnChanges(changes: SimpleChanges): void {
//    this.dept = this.deptSevice.getDepartmentById(this.id);
   
//   }

}
