import { Component } from '@angular/core';
import { JobSeekersOfferingsComponent } from "../../components/job-seekers-offerings/job-seekers-offerings.component";
import { JobSeekersHeroComponent } from '../../components/job-seekers-hero/job-seekers-hero.component';
import { JobSeekersHowItWorksComponent } from '../../components/job-seekers-how-it-works/job-seekers-how-it-works.component';
import { LetsTalkComponent } from "../../components/lets-talk/lets-talk.component";

@Component({
  selector: 'app-job-seekers',
  imports: [JobSeekersOfferingsComponent, JobSeekersHeroComponent, JobSeekersHowItWorksComponent, LetsTalkComponent],
  standalone: true,
  templateUrl: './job-seekers.component.html',
  styleUrl: './job-seekers.component.css'
})
export class JobSeekersComponent {

}
