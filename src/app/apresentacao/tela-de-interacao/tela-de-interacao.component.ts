import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'guru-tela-de-interacao',
  templateUrl: './tela-de-interacao.component.html',
  styleUrls: ['./tela-de-interacao.component.css']
})
export class TelaDeInteracaoComponent implements OnInit {

  private guruForm: FormGroup = undefined;

  public constructor(private formBuilder: FormBuilder) {
    this.criarGuruForm();
  }

  public ngOnInit(): void {
  }

  private criarGuruForm(): void {
    this.guruForm = this.formBuilder.group({
      perguntaDoUsuario: '',
      respostaDoGuru: ''
    });
    this.guruForm.get('respostaDoGuru').disable();
  }

  private onKeyDownPerguntaDoUsuario(event: KeyboardEvent) {
    console.log(event.key);
  }

}
