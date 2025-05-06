import { Component } from '@angular/core';
import { LogoWhiteTextComponent } from '../logo-white-text/logo-white-text.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LogoWhiteTextComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
})
export class FooterComponent {

}
