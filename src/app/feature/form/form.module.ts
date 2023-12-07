import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './components/builder/builder.component';
import { AnswersComponent } from './components/answers/answers.component';
import { FormRoutingModule } from './form-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ModalAddNewQuestionComponent } from './components/modal-add-new-question/modal-add-new-question.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    BuilderComponent,
    AnswersComponent,
    ModalCreateComponent,
    ModalAddNewQuestionComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
})
export class FormModule {}
