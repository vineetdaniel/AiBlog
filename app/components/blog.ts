import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/articles';
import { Article } from './article';



@Component({
	selector: 'my-blogs',
	styleUrls: ['./app/templates/css/styles.css'],
	templateUrl: './app/templates/index.html',
	providers: [ ArticleService ]
})

export class BlogComponent implements OnInit { 
		selectedArticle: Article;
		articles: Article[];

		constructor(private articleService: ArticleService) { }

	getArticles(): void {
		this.articleService.getArticles().then(articles =>
			this.articles = articles);

	}
	ngOnInit(): void {
		this.getArticles();
	}
	//articles = ARTICLES;

	onSelect(article: Article): void {
		this.selectedArticle = article;
	}
}

