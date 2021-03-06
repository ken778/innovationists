import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './pages/features/features.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  { path: 'features', component: FeaturesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
