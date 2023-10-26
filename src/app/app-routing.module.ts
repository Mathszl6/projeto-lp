import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { PeluciasComponent } from './pelucias/pelucias.component';
import { CanecasComponent } from './canecas/canecas.component';
import { BonecosComponent } from './bonecos/bonecos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch:'full'},
{path: 'home', component: HomeComponent },
{path: 'camisetas', component: CamisetasComponent },
{path: 'pelucias', component: PeluciasComponent },
{path: 'canecas', component: CanecasComponent },
{path: 'bonecos', component: BonecosComponent },
{path: 'carrinho', component: CarrinhoComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
