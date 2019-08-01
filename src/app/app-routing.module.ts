import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';


const routes: Routes = [
  { path: 'listaPresentes', component: ListaComponent},
  { path: '', redirectTo: '/listaPresentes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
