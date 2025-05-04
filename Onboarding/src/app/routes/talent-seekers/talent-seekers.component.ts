import { Component } from '@angular/core';
import { TalentSeekersHeroComponent } from '../../components/talent-seekers-hero/talent-seekers-hero.component';
import { TalentSeekersOfferingsComponent } from '../../components/talent-seekers-offerings/talent-seekers-offerings.component';

@Component({
  selector: 'app-talent-seekers',
  imports: [TalentSeekersHeroComponent, TalentSeekersOfferingsComponent],
  standalone: true,
  templateUrl: './talent-seekers.component.html',
  styleUrl: './talent-seekers.component.css'
})
export class TalentSeekersComponent {

}
