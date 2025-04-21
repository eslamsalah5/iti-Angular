import { Component } from '@angular/core';import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';

import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { DepartmentListComponent } from "./Department/department-list/department-list.component";
import { DepartmentDetailsComponent } from "./Department/department-details/department-details.component";
import { DepartmentListWithServiceComponent } from "./Department2/department-list-with-service/department-list-with-service.component";

@Component({
  selector: 'app-root',
  imports: [GridModule, PagerModule, 
    RouterOutlet,
    NavComponent,
    FooterComponent,
    CourseComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent,
    DepartmentListWithServiceComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firstProj';
}
