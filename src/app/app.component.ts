import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { ChooseComponent } from './choose/choose.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokemon';
}
