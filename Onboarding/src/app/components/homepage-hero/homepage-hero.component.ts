import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage-hero',
  imports: [MatIconModule, RouterLink],
  templateUrl: './homepage-hero.component.html',
  styleUrl: './homepage-hero.component.css',
  standalone: true,
})
export class HomepageHeroComponent {

}
