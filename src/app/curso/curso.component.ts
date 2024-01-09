import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
 //URL base 
  url = "http://localhost/api/php/";

  //Vetor de cursos
  vetor:Curso[]= [];

  //Objeto da classe curso
  curso: Curso = new Curso("", 0);
  
  //construtor
  constructor (private curso_service:CursoService) { }

//Inicializador
  ngOnInit() {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao(); 
  }

//Cadastro
cadastro():void{
  alert("Cadastro");
}
  //seleção
selecao(){
  this.curso_service.obterCursos().subscribe(
    (res: Curso[]) => {
      this.vetor = res;
    } 
  )
}
  

//Alterar
alterar():void {
  alert("Aleterar");
}

//Remover
remover():void{
  alert("Remover");
}
}

