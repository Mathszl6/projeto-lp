import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { PeluciasComponent } from './pelucias/pelucias.component';
import { CanecasComponent } from './canecas/canecas.component';
import { BonecosComponent } from './bonecos/bonecos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    CamisetasComponent,
    PeluciasComponent,
    CanecasComponent,
    BonecosComponent,
    CarrinhoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
