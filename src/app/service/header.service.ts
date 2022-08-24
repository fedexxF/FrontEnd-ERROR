import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: "root"
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseURL;

  constructor(private http: HttpClient){}
  
  public getUser():Observable<Usuario>{
     return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`); 
  }

public updaterUsuario(usuario: Usuario):Observable<Usuario> {
  return this.http.put<Usuario> (`${this.apiServerUrl}/usuario/update`, usuario);
}

}