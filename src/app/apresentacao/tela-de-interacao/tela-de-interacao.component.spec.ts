import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeInteracaoComponent } from './tela-de-interacao.component';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('TelaDeInteracaoComponent', () => {
  let component: TelaDeInteracaoComponent;
  let fixture: ComponentFixture<TelaDeInteracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        TelaDeInteracaoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDeInteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
