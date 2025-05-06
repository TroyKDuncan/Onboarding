import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
})
export class AppComponent {
  route = signal('home');
  setRoute(newRoute: string) {
    this.route.set(newRoute);
  }
}
