import { Component } from '@angular/core';
import { LogoWhiteTextComponent } from '../logo-white-text/logo-white-text.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [LogoWhiteTextComponent, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {}
