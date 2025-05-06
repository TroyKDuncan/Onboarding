import { Routes } from '@angular/router';
import { HomepageComponent } from './routes/homepage/homepage.component';
import { TalentSeekersComponent } from './routes/talent-seekers/talent-seekers.component';
import { JobSeekersComponent } from './routes/job-seekers/job-seekers.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'talent-seekers', component: TalentSeekersComponent },
  { path: 'job-seekers', component: JobSeekersComponent },
  { path: 'about-us', component: AboutUsComponent}
];
