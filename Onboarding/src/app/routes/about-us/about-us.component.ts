import { Component } from '@angular/core';
import { AboutWhyWeStartedThisComponent } from '../../components/about-why-we-started-this/about-why-we-started-this.component';
import { AboutCommittedToComponent } from "../../components/about-committed-to/about-committed-to.component";
import { LetsTalkComponent } from "../../components/lets-talk/lets-talk.component";

@Component({
  selector: 'app-about-us',
  imports: [AboutWhyWeStartedThisComponent, AboutCommittedToComponent, LetsTalkComponent],
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
