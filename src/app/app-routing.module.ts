import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { home } from './components/home/home.component';
import { noticias } from './components/noticias/noticias.component';

const routes: Routes = [
  { path: 'home', component: home},
  { path: 'noticias', component: noticias},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
