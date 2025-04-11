import { Routes } from '@angular/router';
import { ExcersisesComponent} from './excersises/excersises.component';
import { ProfileComponent } from './profile/profile.component';
import { SocialComponent } from './social/social.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: "", component: AppComponent},
    {path: "workouts", component: WorkoutsComponent},
    {path: "excersises", component: ExcersisesComponent},
    {path: "social", component: SocialComponent},
    {path: "profile", component: ProfileComponent}
];
