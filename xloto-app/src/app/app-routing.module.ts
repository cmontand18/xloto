import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestaoComponent } from './gestao/gestao.component';
import { SimulacaoGestaoComponent } from './simulacao-gestao/simulacao-gestao.component';
import { SimulacaoVendasComponent } from './simulacao-vendas/simulacao-vendas.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  { path: '', component: GestaoComponent },
  { path: 'gestao', component: GestaoComponent },
  { path: 'simulacao-gestao', component: SimulacaoGestaoComponent},
  { path: 'simulacao-vendas', component: SimulacaoVendasComponent},
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
