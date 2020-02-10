import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { HomeComponent } from './home/home.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: "notes", pathMatch: "full" },
      { path: 'notes', component: NotesListComponent },
      { path: 'notes/:id', component: NoteDetailsComponent },
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
