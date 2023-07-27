import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EditComponent } from './components/edit/edit.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { GestionCatComponent } from './components/gestion_cat/gestion_cat.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { Gestion_formComponent } from './components/gestion_form/gestion_form.component';
import { GestionComComponent } from './gestion-com/gestion-com.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'empleado', component: EmpleadoComponent},
  { path: 'edit', component: EditComponent},
  { path: 'comentarios', component: ComentariosComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'gestion_cat', component: GestionCatComponent},
  { path: 'gestion_form', component: Gestion_formComponent},
  { path: 'gestion_com', component: GestionComComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
