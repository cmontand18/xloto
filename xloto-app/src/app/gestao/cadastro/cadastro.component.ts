import { Component, OnInit } from '@angular/core';
import { GestaoService } from 'src/app/domains/services/gestao/gestao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  carregando = false;
  contato = {
    email: '',
    nome: '',
    msg: '',
    origem: 'Página de vendas'
  };
  constructor(private gestaoService: GestaoService) { }

  ngOnInit(): void {
  }

  enviarCadastro(event: any): any {
    event.preventDefault();
    if (this.contato.email === '' || this.contato.nome === '' || this.contato.msg === '') {
      return false;
    }
    this.carregando = true;

    this.gestaoService.enviarEmail(this.contato).toPromise().then(() => {
      alert('Contato Enviado com sucesso!');
      window.location.reload();
    }).catch((e) => {
      console.log(e);

    }).finally(() => this.carregando = false);

  }
}
