import { Routes } from '@angular/router';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { TalentSeekersComponent } from './routes/talent-seekers/talent-seekers.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'talent-seekers', component: TalentSeekersComponent },
];
