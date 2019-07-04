import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
peopleUrl: string = "https://swapi.co/api/people/";
searchUrl: string = "https://swapi.co/api/people/?search="

  constructor(private http: HttpClient) { }

  getAllPeople(){
    return this.http.get(this.peopleUrl);
  }
  getFilteredPeople(searchText){
    return this.http.get(this.searchUrl + searchText);
  }
}
