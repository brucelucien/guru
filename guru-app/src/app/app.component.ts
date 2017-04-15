import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'guru-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private guruForm: FormGroup = undefined;

  public constructor(private formBuilder: FormBuilder) {
    this.criarGuruForm();
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
