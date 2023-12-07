import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddNewQuestionComponent } from './modal-add-new-question.component';

describe('ModalAddNewQuestionComponent', () => {
  let component: ModalAddNewQuestionComponent;
  let fixture: ComponentFixture<ModalAddNewQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddNewQuestionComponent]
    });
    fixture = TestBed.createComponent(ModalAddNewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
