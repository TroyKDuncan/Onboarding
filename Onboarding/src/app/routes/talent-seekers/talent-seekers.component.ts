import { Component } from '@angular/core';
import { TalentSeekersHeroComponent } from '../../components/talent-seekers-hero/talent-seekers-hero.component';
import { TalentSeekersOfferingsComponent } from '../../components/talent-seekers-offerings/talent-seekers-offerings.component';
import { TalentSeekersHowItWorksComponent } from '../../components/talent-seekers-how-it-works/talent-seekers-how-it-works.component';
import { LetsTalkComponent } from "../../components/lets-talk/lets-talk.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-talent-seekers',
  imports: [TalentSeekersHeroComponent, TalentSeekersOfferingsComponent, TalentSeekersHowItWorksComponent, LetsTalkComponent, FooterComponent],
  standalone: true,
  templateUrl: './talent-seekers.component.html',
  styleUrl: './talent-seekers.component.css'
})
export class TalentSeekersComponent {

}
