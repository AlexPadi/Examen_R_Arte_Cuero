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
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { EditComponent } from './components/edit/edit.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AboutEstComponent } from './components/about-est/about-est.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AdminService } from './services/admin.service';
import { ChatComponent } from './components/chat/chat.component';
import { NewsService } from './services/news.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    AboutComponent,
    GruposComponent,
    AdminComponent,
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
  providers: [StudentService,AdminService,NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
