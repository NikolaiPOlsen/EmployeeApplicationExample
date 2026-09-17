import { NgModule } from '@angular/core'
import { PostForm } from '../components/post-form/post-form';
import { NewPost } from '../new-post/new-post';
import { EditPost } from '../edit-post/edit-post';
import { ButtonsModule } from '../../../app-components/buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailedPosts } from '../detailed-posts/detailed-posts';
import { Posts } from '../posts';
import { RouterModule } from '@angular/router';
import { postsRoutes } from '../posts.routes';

@NgModule({
    declarations: [PostForm, NewPost, EditPost, DetailedPosts, Posts], //Components, pipes and directives
    imports: [ButtonsModule, ReactiveFormsModule, RouterModule.forChild(postsRoutes)], //imports built-inn lib
    providers: [], //services
    exports: [], //export
})

export class PostPageModule {

}