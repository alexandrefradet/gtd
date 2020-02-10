import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomingsListComponent } from './incomings/incomings-list/incomings-list.component';
import { HomeComponent } from './home/home.component';
import { IncomingDetailsComponent } from './incomings/incoming-details/incoming-details.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: "incomings", pathMatch: "full" },
      { path: 'incomings', component: IncomingsListComponent },
      { path: 'incomings/:id', component: IncomingDetailsComponent },
      { path: 'projects', component: ProjectsListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
