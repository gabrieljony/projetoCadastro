import { Component, OnInit, Input } from '@angular/core';

import { ClienteListComponent } from './../cliente-list/cliente-list.component';
import { ClienteService } from './../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  @Input() 
  cliente: Cliente;

  constructor(private servico: ClienteService, private listaClientes: ClienteListComponent) { }

  ngOnInit() {
  }

  updateAtivo(isAtivo: boolean) {
    this.servico.updateCliente(this.cliente.id,
      { nome: this.cliente.nome, cpf: this.cliente.cpf, ativo: isAtivo })
      .subscribe(
        data => {
          console.log(data);
          this.cliente = data as Cliente;
        },
        error => console.log(error));
  }
 
  deleteCliente() {
    this.servico.deleteCliente(this.cliente.id)
      .subscribe(
        data => {
          console.log(data);
          this.listaClientes.reloadData();
        },
        error => console.log(error));
  }

}
