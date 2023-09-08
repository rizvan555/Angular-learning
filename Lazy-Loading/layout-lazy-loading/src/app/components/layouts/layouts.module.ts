import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutsComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomeModule),
          },
          {
            path: 'about',
            component: AboutComponent,
            loadChildren: () =>
              import('../about/about.module').then((m) => m.AboutModule),
          },
        ],
      },
    ]),
  ],
})
export class LayoutsModule {}
