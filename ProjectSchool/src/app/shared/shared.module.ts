import { NgModule } from '@angular/core';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [
    ToolbarTitleComponent
  ],
  exports: [
    ToolbarTitleComponent,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
