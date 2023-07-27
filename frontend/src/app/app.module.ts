import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EditComponent } from './components/edit/edit.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { GestionCatComponent } from './components/gestion_cat/gestion_cat.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EmpleadoService } from './services/empleado.service';
import { Gestion_formComponent } from './components/gestion_form/gestion_form.component';
import { NavComponent } from './components/nav/nav.component';
import { GestionComComponent } from './gestion-com/gestion-com.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    AboutComponent,
    CatalogoComponent,
    EmpleadoComponent,
    EditComponent,
    ComentariosComponent,
    GestionCatComponent,
    FormularioComponent,
    Gestion_formComponent,
    NavComponent,
    GestionComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [UsuarioService,EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
