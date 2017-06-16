import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent }   from './front/front.component';
import { AboutComponent }   from './about/about.component';
import { AdminComponent }   from './admin/admin.component';
import { MemberDetailComponent }   from './member-detail/member-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
