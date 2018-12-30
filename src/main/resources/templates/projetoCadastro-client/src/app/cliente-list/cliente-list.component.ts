import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';
import { ClienteService } from './../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Observable<Cliente[]>;

  constructor(private servico: ClienteService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteTodosClientes() {
    this.servico.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.clientes = this.servico.getListaCliente();
  }

}
