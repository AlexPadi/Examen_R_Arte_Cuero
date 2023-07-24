import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model/empleado.model';

const baseUrl='http://localhost:8081/api/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(public http: HttpClient) {
    console.log('El servicio Http esta funcionando…');
   }

  get(id: any): Observable<Empleado> {
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

  findByEmail(email: any,pass: any): Observable<Empleado[]> {
     return this.http.get<Empleado[]>(`${baseUrl}?email=${email}&pass=${pass}`);
  }
}
