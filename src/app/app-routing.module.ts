import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresenteComponent } from './components/presente/presente.component';


const routes: Routes = [
  { path: '', redirectTo: '/presentes', pathMatch: 'full' },
  { path: 'presentes', component: PresenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
