import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent }   from './front/front.component';
import { AboutComponent }   from './about/about.component';
import { RosterComponent }   from './roster/roster.component';
import { AdminComponent }   from './admin/admin.component';
import { MemberDetailComponent }   from './member-detail/member-detail.component';
import { ForumComponent }   from './forum/forum.component';
import { About2Component }   from './about2/about2.component';

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
    path: 'roster',
    component: RosterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'about2',
    component: About2Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
