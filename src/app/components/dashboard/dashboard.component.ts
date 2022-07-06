import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre: string;
  materia: string;
  imagen: string;
  
  constructor() { 
    this.nombre="Manuel"
    this.materia=""
    this.imagen=""
  }

  ngOnInit(): void {
  }

  getMateria(): string{
    return this.materia = "Diseño de Interfaces"
  }

}
