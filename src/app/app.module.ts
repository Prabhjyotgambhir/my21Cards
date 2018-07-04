import { CardService } from './services/card.service';
import { routes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardChooseComponent } from './card-choose/card-choose.component';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { StartComponent } from './start/start.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardChooseComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
