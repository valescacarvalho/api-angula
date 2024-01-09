import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url = "http://localhost/api/php/";

//vetor
  vetor: Curso[]=[];

  //Construtor
  constructor(private http: HttpClient) { }

//obter todos os cursos
obterCursos():Observable <Curso[]> {
  return this.http.get(this.url+"listar")
.pipe( map((res:any) =>{ // verifique se tem o :any
this.vetor = res;
return this.vetor;
}))
}
}