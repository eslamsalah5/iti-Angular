import { Routes } from '@angular/router';
import { DepartmentListComponent } from './Department/department-list/department-list.component';

export const routes: Routes = [
    { path: 'Departments', component: DepartmentListComponent,children: [] },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
