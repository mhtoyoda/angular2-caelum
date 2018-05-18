import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mensagem',
  templateUrl: './mensagem.component.html',
  styles: []
})
export class MensagemComponent implements OnInit {

  @Input() tipo = 'primary'
  @Input() texto = ''

  constructor() { }

  ngOnInit() {
  }

}
