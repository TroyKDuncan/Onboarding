import { Component } from '@angular/core';
import { LogoWhiteTextComponent } from '../logo-white-text/logo-white-text.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [LogoWhiteTextComponent, MatIconModule],
  templateUrl: './navbar.component.html',
  standalone: true,
})
export class NavbarComponent {}
