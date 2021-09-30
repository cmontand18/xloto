import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/domains/models/contato';
import { VendasService } from 'src/app/domains/services/vendas/vendas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  carregando = false;
  contato: Contato = {
    email: '',
    nome: '',
    telefone: '',
    msg: '',
    origem: 'Página de vendas'
  };
  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
  }


  enviarCadastro(event: any): any {
    event.preventDefault();
    if (this.contato.email === '' || this.contato.nome === '' || this.contato.msg === '') {
      return false;
    }
    this.carregando = true;

    this.vendaService.enviarEmail(this.contato).toPromise().then(() => {
      alert('Contato Enviado com sucesso!');
      window.location.reload();
    }).catch((e) => {
      console.log(e);
    }).finally(() => this.carregando = false);

  }
}
