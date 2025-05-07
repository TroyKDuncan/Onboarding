import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talent-seekers-hero',
  imports: [MatIconModule, RouterLink],
  standalone: true,
  templateUrl: './talent-seekers-hero.component.html',
  styleUrl: './talent-seekers-hero.component.css'
})
export class TalentSeekersHeroComponent {

}
