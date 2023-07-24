import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { AboutComponent } from './components/about/about.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EditComponent } from './components/edit/edit.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AboutEstComponent } from './components/about-est/about-est.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmpleadoService } from './services/empleado.service';
import { ChatComponent } from './components/chat/chat.component';
import { NewsService } from './services/news.service';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    AboutComponent,
    GruposComponent,
    EmpleadoComponent,
    EditComponent,
    NoticiasComponent,
    AboutEstComponent,
    EventosComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [UsuarioService,EmpleadoService,NewsService,EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
