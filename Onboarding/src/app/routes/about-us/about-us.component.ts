import { Component } from '@angular/core';
import { AboutWhyWeStartedThisComponent } from '../../components/about-why-we-started-this/about-why-we-started-this.component';
import { AboutCommittedToComponent } from "../../components/about-committed-to/about-committed-to.component";
import { LetsTalkComponent } from "../../components/lets-talk/lets-talk.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about-us',
  imports: [AboutWhyWeStartedThisComponent, AboutCommittedToComponent, LetsTalkComponent, FooterComponent],
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
