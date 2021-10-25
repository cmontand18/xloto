import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestaoComponent } from './gestao/gestao.component';
import { PromocaoDoisComponent } from './promocao-dois/promocao-dois.component';
import { PromocaoOneComponent } from './promocao-um/promocao-one.component';
import { SimulacaoGestaoComponent } from './simulacao-gestao/simulacao-gestao.component';
import { SimulacaoVendasComponent } from './simulacao-vendas/simulacao-vendas.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  //{ path: '', component: VendasComponent },
  //{ path: '', component: GestaoComponent },
  //{ path: '', component: SimulacaoGestaoComponent},
  //{ path: '', component: SimulacaoVendasComponent},
  //{ path: '', component: AdminComponent }
  { path: '', component: PromocaoOneComponent }
  //{ path: '', component: PromocaoDoisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
