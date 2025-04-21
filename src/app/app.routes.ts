import { Routes } from '@angular/router';
import { DepartmentListComponent } from './Department/department-list/department-list.component';
import { DepartmentDetailsComponent } from './Department/department-details/department-details.component';
import { DepartmentListWithServiceComponent } from './Department2/department-list-with-service/department-list-with-service.component';
import { DepartmentDetailsWithServiceComponent } from './Department2/department-details-with-service/department-details-with-service.component';
import { DepartmentEditWithServiceComponent } from './Department2/department-edit-with-service/department-edit-with-service.component';
import { HomeComponent } from './home/home.component';
import { DepartmentAddWithServiceComponent } from './Department2/department-add-with-service/department-add-with-service.component';
import { StudentListComponent } from './Student/student-list/student-list.component';
import { StudentDetailsComponent } from './Student/student-details/student-details.component';
import { StudentAddComponent } from './Student/student-add/student-add.component';
import { StudentUpdateComponent } from './Student/student-update/student-update.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'departments',
    component: DepartmentListWithServiceComponent,
  },
  {
    path: 'departments/details/:id',
    component: DepartmentDetailsWithServiceComponent,
  },
  {
    path: 'departments/add',
    component: DepartmentAddWithServiceComponent,
  },
  {
    path: 'departments/edit/:id',
    component: DepartmentEditWithServiceComponent,
  },
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: 'student/:id',
    component: StudentDetailsComponent,
  },
  {
    path: 'students/add',
    component: StudentAddComponent,
  },
  {
    path: 'students/edit/:id',
    component: StudentUpdateComponent,
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
