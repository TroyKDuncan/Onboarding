import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talent-seekers-offerings',
  imports: [MatIconModule, RouterLink],
  standalone: true,
  templateUrl: './talent-seekers-offerings.component.html',
  styleUrl: './talent-seekers-offerings.component.css',
})
export class TalentSeekersOfferingsComponent {}
