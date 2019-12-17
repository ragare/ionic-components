import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from 'src/app/interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbumnes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getHeroes() {
    return this.http.get<any[]>('/assets/data/superheroes.json');
  }

}
