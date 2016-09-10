import { Component, Input } from '@angular/core';
import { Article } from './article';


@Component({
	selector: 'my-article-detail',
	templateUrl: './app/templates/article-detail.html'
})

export class ArticleDetailComponent {
	@Input()
	article: Article;

}