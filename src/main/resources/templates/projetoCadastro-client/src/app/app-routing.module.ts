import { ClienteSearchComponent } from './cliente-search/cliente-search.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '', redirectTo: 'clientes', pathMatch: 'full' 
  },
  { 
    path: 'clientes', component: ClienteListComponent 
  },
  { 
    path: 'criar', component: ClienteCreateComponent 
  },
  { 
    path: 'pesquisar', component: ClienteSearchComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
