import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'ProjectSchool';
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
