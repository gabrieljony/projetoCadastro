import { Component, OnInit } from '@angular/core';

import { ClienteService } from './../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted = false;

  constructor(private servico: ClienteService) { }

  ngOnInit() {
  }

  novoCadastroCliente(): void {
    this.submitted = false;
    this.cliente = new Cliente();
  }
 
  save() {
    this.servico.createCliente(this.cliente)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cliente = new Cliente();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
