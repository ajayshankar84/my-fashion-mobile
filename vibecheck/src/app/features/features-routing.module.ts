import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesPage } from './features.page';


const routes: Routes = [
  {
    path: '',
    component: FeaturesPage,    
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'fashion',
      },
       {
        path: 'fashion',
        loadChildren: () =>
          import('./fashion/fashion.module').then(
            (m) => m.FashionModule,
          ),
      },
      
      {
        path: 'discover',
        loadChildren: () =>
          import('./discover/discover.module').then(
            (m) => m.DiscoverModule,
          ),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./chat/chat.module').then(
            (m) => m.ChatModule,
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfileModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class FeaturesRoutingModule {}
