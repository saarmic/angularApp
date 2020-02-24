import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';



const routes: Routes = [
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
