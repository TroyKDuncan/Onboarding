import { Component } from '@angular/core';
import { LogoWhiteTextComponent } from '../logo-white-text/logo-white-text.component';

@Component({
  selector: 'app-footer',
  imports: [LogoWhiteTextComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
})
export class FooterComponent {

}
