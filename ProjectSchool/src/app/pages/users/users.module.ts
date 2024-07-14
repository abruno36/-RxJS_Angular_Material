import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MyProfilesComponent } from './my-profiles/my-profiles.component';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';
import { UsersMaterialModule } from '@app/shared/materials/users-mat.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent,
    MyProfilesComponent,
    MyConquestsComponent,
    MyDisciplinesComponent
  ],
  imports: [
    CommonModule,
    UsersMaterialModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
