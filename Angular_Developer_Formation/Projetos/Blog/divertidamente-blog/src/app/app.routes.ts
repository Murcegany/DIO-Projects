// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AlegriaComponent } from './alegria/alegria.component';
import { TristezaComponent } from './tristeza/tristeza.component';
import { RaivaComponent } from './raiva/raiva.component';
import { MedoComponent } from './medo/medo.component';
import { NojinhoComponent } from './nojinho/nojinho.component';

export const AppRoutes: Routes = [
  { path: 'alegria', component: AlegriaComponent },
  { path: 'tristeza', component: TristezaComponent },
  { path: 'raiva', component: RaivaComponent },
  { path: 'medo', component: MedoComponent },
  { path: 'nojinho', component: NojinhoComponent },
  { path: '', redirectTo: '/alegria', pathMatch: 'full' }
];
