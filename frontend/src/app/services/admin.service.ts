import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model/admin.model';

const baseUrl='http://localhost:8081/api/admins';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) {
    console.log('El servicio Http esta funcionando…');
   }

  get(id: any): Observable<Admin> {
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

  findByEmail(email: any,pass: any): Observable<Admin[]> {
     return this.http.get<Admin[]>(`${baseUrl}?email=${email}&pass=${pass}`);
  }
}
