import { Component, OnInit } from '@angular/core';
import { Clientes } from '../Models/clientes';
import { clientesService } from '../Services/clientesservices';

@Component({
  selector: 'app-lista-cadastro',
  templateUrl: './lista-cadastro.component.html',
  styleUrls: ["lista-cadastro.component.css"]
})
export class ListaCadastroComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'email','telefone', 'dataNascimento','acao'];
  dataSource = Clientes;

  
  clientes: Clientes[] = [];

  constructor(
    private _clientesService: clientesService,
  ) { }

  ngOnInit() {

    this._clientesService.retornarTodos().subscribe(
      c => this.clientes = c,
      error => alert('Erro ao carregar a lista')
    )
  }

  get filtrarCadastro() {
    return this.clientes.filter( x => x.id > 0);
  }
}
