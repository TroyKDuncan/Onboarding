import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageHeroComponent } from "./components/homepage-hero/homepage-hero.component";
import { HomepageDifferentComponent } from "./components/homepage-different/homepage-different.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavbarComponent, HomepageHeroComponent, HomepageDifferentComponent],
})
export class AppComponent {
  name = signal('Troy');

  getName() {
    return this.name();
  }
}
