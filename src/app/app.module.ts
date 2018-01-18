import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayWholeComponent } from './display-whole/display-whole.component';
import { ItemeditComponent } from './display-whole/itemedit/itemedit.component';
import { SearchPipePipe } from './display-whole/itemedit/search-pipe.pipe';
import {DataService} from './shared/data.service';
import { SortPipePipe } from './sort-pipe.pipe';





@NgModule({
  declarations: [
    AppComponent,
    DisplayWholeComponent,
    ItemeditComponent,
    SearchPipePipe,
    SortPipePipe,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
