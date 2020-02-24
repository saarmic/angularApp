import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DataService, PostService]
})
export class AppRoutingModule { }
