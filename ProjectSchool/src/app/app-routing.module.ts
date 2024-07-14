import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) }, 
                        { path: 'pages/dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                        { path: 'pages/courses', loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule) },
                        { path: 'pages/teachers', loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule) },
                        { path: 'pages/students', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule) },
                        { path: 'pages/support', loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
