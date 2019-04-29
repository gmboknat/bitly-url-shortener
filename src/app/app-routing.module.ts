import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';

const routes: Routes = [
  {
    path: '',
    component: ShortenUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}