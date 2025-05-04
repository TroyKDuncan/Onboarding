import { Component } from '@angular/core';
import { HomepageHeroComponent } from "../../components/homepage-hero/homepage-hero.component";
import { HomepageDifferentComponent } from "../../components/homepage-different/homepage-different.component";
import { LetsTalkComponent } from "../../components/lets-talk/lets-talk.component";

@Component({
  selector: 'app-homepage',
  imports: [HomepageHeroComponent, HomepageDifferentComponent, LetsTalkComponent],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
