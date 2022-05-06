import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharizardComponent } from './basic/charizard/charizard.component';

const routes: Routes = [
  { path: 'basic/charizard', component: CharizardComponent },
  {path: '**', redirectTo: 'basic/charizard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
