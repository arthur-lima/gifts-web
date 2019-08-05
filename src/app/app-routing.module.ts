import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresenteComponent } from './components/presente/presente.component';
import { SobreComponent } from './components/sobre/sobre.component';


const routes: Routes = [
  { path: '', redirectTo: '/presentes', pathMatch: 'full' },
  { path: 'presentes', component: PresenteComponent},
  { path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
