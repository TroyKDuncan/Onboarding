import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-seekers-hero',
  imports: [MatIconModule, RouterLink],
  standalone: true,
  templateUrl: './job-seekers-hero.component.html',
  styleUrl: './job-seekers-hero.component.css'
})
export class JobSeekersHeroComponent {

}
