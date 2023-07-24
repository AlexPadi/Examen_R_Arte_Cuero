import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model/usuario.model';

const baseUrl = 'http://localhost:8081/api/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { 
    console.log('El servicio Http esta funcionando…');
  }

  
  getAll(): Observable<Usuario[]> {
     return this.http.get<Usuario[]>(baseUrl);
  }

  get(id: any): Observable<Usuario> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }






  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  findByEmail(email: any,pass: any): Observable<Usuario[]> {
     return this.http.get<Usuario[]>(`${baseUrl}?email=${email}&pass=${pass}`);
  }
}
