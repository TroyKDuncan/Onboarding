import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageHeroComponent } from "./components/homepage-hero/homepage-hero.component";
import { HomepageDifferentComponent } from "./components/homepage-different/homepage-different.component";
import { LetsTalkComponent } from "./components/lets-talk/lets-talk.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavbarComponent, HomepageHeroComponent, HomepageDifferentComponent, LetsTalkComponent, FooterComponent],
})
export class AppComponent {
  name = signal('Troy');

  getName() {
    return this.name();
  }
}
