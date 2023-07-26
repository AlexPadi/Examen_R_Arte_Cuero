import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EditComponent } from './components/edit/edit.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AboutEstComponent } from './components/about-est/about-est.component';
import { EventosComponent } from './components/eventos/eventos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'grupos', component: GruposComponent },
  { path: 'empleado', component: EmpleadoComponent},
  { path: 'edit', component: EditComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'about_est', component: AboutEstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
