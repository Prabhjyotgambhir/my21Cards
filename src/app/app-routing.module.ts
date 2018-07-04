import { CardChooseComponent } from './card-choose/card-choose.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
  { path: '', component: CardChooseComponent},
  { path: 'start', component: StartComponent }
];
