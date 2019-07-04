import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
peopleUrl: string = "https://swapi.co/api/people/";
  constructor(private http: HttpClient) { }

  getAllPeople(){
    return this.http.get(this.peopleUrl);
  }
}
