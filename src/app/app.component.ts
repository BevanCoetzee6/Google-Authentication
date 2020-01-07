import { Component, Input, ViewChild, Directive } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { transition, animate, state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Google-Books-API-Testing';

  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;

  triggerMethod() {
      this.trigger.openMenu();
  }
}
