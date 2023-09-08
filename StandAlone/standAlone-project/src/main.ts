import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(CommonModule, BrowserModule),
    provideRouter([
      {
        path: 'login',
        loadComponent: () =>
          import('./app/components/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: '',
        loadComponent: () =>
          import('./app/components/layouts/layouts.component').then(
            (m) => m.LayoutsComponent
          ),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./app/components/home/home.component').then(
                (m) => m.HomeComponent
              ),
          },
          {
            path: 'about',
            loadComponent: () =>
              import('./app/components/about/about.component').then(
                (m) => m.AboutComponent
              ),
          },
        ],
      },
      {
        path: '**',
        loadComponent: () =>
          import('./app/components/not-found/not-found.component').then(
            (m) => m.NotFoundComponent
          ),
      },
    ]),
  ],
}).catch((err) => console.error(err));
