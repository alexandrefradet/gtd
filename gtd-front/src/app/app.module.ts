import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { IncomingsListComponent } from './incomings/incomings-list/incomings-list.component';
import { IncomingCardComponent } from './incomings/incoming-card/incoming-card.component';
import { IncomingDetailsComponent } from './incomings/incoming-details/incoming-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomingsListComponent,
    HomeComponent,
    IncomingCardComponent,
    IncomingDetailsComponent,
    ProjectsListComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
