"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var articles_1 = require('../services/articles');
var BlogComponent = (function () {
    function BlogComponent(articleService) {
        this.articleService = articleService;
    }
    BlogComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticles().then(function (articles) {
            return _this.articles = articles;
        });
    };
    BlogComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    //articles = ARTICLES;
    BlogComponent.prototype.onSelect = function (article) {
        this.selectedArticle = article;
    };
    BlogComponent = __decorate([
        core_1.Component({
            selector: 'my-blogs',
            styleUrls: ['./app/templates/css/styles.css'],
            templateUrl: './app/templates/index.html',
            providers: [articles_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [articles_1.ArticleService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.js.map