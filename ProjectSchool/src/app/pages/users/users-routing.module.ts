import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { MyProfilesComponent } from './my-profiles/my-profiles.component';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';

const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'prefix',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'myProfile'},
      { path: 'myProfile', component: MyProfilesComponent },
      { path: 'myConquests', component: MyConquestsComponent },
      { path: 'myDisciplines', component: MyDisciplinesComponent }
    ]
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
