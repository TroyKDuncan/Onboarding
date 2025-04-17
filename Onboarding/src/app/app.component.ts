import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavbarComponent],
})
export class AppComponent {
  name = signal('Troy');

  getName() {
    return this.name();
  }
}
