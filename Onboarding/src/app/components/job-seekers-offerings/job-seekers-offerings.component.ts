import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-seekers-offerings',
  imports: [MatIconModule, RouterLink],
  standalone: true,
  templateUrl: './job-seekers-offerings.component.html',
  styleUrl: './job-seekers-offerings.component.css'
})
export class JobSeekersOfferingsComponent {

}
