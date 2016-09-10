import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './components/app';
import { ArticleDetailComponent } from './components/article-detail';
import { Article } from './components/article';
import { ArticleService } from './services/articles';

@NgModule({
	imports: [ NgbModule,
	 BrowserModule,
	 FormsModule ],
	declarations: [ 
	 AppComponent,
	 ArticleDetailComponent,
	 
	  ],
	  providers: [
	  	ArticleService
	  ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }