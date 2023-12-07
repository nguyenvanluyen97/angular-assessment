import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './components/builder/builder.component';
import { AnswersComponent } from './components/answers/answers.component';

const routes: Routes = [
  {
    path: 'builder',
    component: BuilderComponent,
  },
  {
    path: 'answers',
    component: AnswersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
