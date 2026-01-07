import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'event-types',
        loadComponent: () => import('./features/event-types/event-types.component').then(m => m.EventTypesComponent)
    },
    {
        path: 'why-us',
        loadComponent: () => import('./features/why-us/why-us.component').then(m => m.WhyUsComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'create-event',
        loadComponent: () => import('./features/create-event/create-event.component').then(m => m.CreateEventComponent)
    }
];
