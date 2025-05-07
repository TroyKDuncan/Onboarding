import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage-different',
  imports: [MatIconModule, RouterLink],
  templateUrl: './homepage-different.component.html',
  styleUrl: './homepage-different.component.css',
  standalone: true,
})
export class HomepageDifferentComponent {

}
