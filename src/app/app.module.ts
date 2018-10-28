import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GitService } from './git.service';

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GitService],
  bootstrap: [AppComponent],
})
export class AppModule { }
