import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-search',
  templateUrl: './cliente-search.component.html',
  styleUrls: ['./cliente-search.component.css']
})
export class ClienteSearchComponent implements OnInit {

  cpf: number;
  clientes: Cliente[];

  constructor(private servico: ClienteService) { }

  ngOnInit() {
  }

  private pesquisarClientes() {
    this.servico.getClienteByCpf(this.cpf)
      .subscribe(dados => this.clientes = dados);
  }
 
  onSubmit() {
    this.pesquisarClientes();
  }

}
