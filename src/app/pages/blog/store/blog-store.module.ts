import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BlogApiService } from 'src/app/pages/blog/services/blog-api.service';
import { BlogEffects } from 'src/app/pages/blog/store/effects/blog.effects';
import * as fromBlog from 'src/app/pages/blog/store/reducers/blog.reducer';

@NgModule({
  providers: [BlogApiService],
  imports: [
    StoreModule.forFeature(fromBlog.blogFeatureKey, fromBlog.reducer),
    EffectsModule.forFeature([BlogEffects]),
  ],
})
export class BlogStoreModule {}
