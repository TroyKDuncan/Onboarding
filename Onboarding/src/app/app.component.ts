import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomepageComponent } from "./routes/homepage/homepage.component";
import { TalentSeekersComponent } from './routes/talent-seekers/talent-seekers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NavbarComponent, HomepageComponent, FooterComponent, HomepageComponent, TalentSeekersComponent],
})
export class AppComponent {
  route = signal('home');
  setRoute(newRoute: string) {
    this.route.set(newRoute);
  }
}
