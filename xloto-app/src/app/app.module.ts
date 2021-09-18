import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VendasModule } from './vendas/vendas.module';
import { GestaoModule } from './gestao/gestao.module';
import { SimulacaoGestaoModule } from './simulacao-gestao/simulacao-gestao.module';
import { SimulacaoVendasModule } from './simulacao-vendas/simulacao-vendas.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AdminModule } from './admin/admin.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VendasModule,
    GestaoModule,
    SimulacaoGestaoModule,
    SimulacaoVendasModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
