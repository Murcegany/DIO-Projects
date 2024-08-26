// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlegriaComponent } from './alegria/alegria.component';
import { TristezaComponent } from './tristeza/tristeza.component';
import { RaivaComponent } from './raiva/raiva.component';
import { MedoComponent } from './medo/medo.component';
import { NojinhoComponent } from './nojinho/nojinho.component';

const routes: Routes = [
  { path: 'alegria', component: AlegriaComponent },
  { path: 'tristeza', component: TristezaComponent },
  { path: 'raiva', component: RaivaComponent },
  { path: 'medo', component: MedoComponent },
  { path: 'nojinho', component: NojinhoComponent },
  { path: '', redirectTo: '/alegria', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
