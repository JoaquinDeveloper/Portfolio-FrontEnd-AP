import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://backend-ap-okyt.onrender.com/personas/';
  //URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL + 'lista' );
  }

  public detail(id:number): Observable<Persona>{
    return this.http.get<Persona>(this.URL + `detail/${id}`);
  }

  public update(id: number,persona: Persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`,persona);
  }

  /*
  public save(persona: Persona): Observable<any>{
    return this.http.post<any>(this.URL + 'create',persona);
  }


  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
  */

}