import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresenteComponent } from './components/presente/presente.component';


const routes: Routes = [
  { path: 'presentes', component: PresenteComponent},
  { path: '', redirectTo: '/presentes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
