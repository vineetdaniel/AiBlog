import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article } from './components/article';

const appRoutes: Routes = [
  {
    path: 'articles',
    component: Article
  }
];
