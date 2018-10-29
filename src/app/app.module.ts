import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GitService } from './git.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { SearchComponent } from './search/search.component';
//Defining Routes
const routes: Routes = [
{path: "git",component:GitComponent},
{path: "search",component:SearchComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [GitService],
  bootstrap: [AppComponent],
})
export class AppModule { }
