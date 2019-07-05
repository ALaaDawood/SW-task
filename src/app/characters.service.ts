import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
peopleUrl: string = "https://swapi.co/api/people/";
searchUrl: string = "https://swapi.co/api/people/?search=";

  constructor(private http: HttpClient) { }

  //this gets ALL people from the Api without implementing any search filters on them
  getAllPeople(){
    return this.http.get(this.peopleUrl);
  }
  /*******************************************************************************/
  //gets only filtered people from the api based on the search term passed in the url
  getFilteredPeople(searchText:string){
    return this.http.get(this.searchUrl + searchText);
  }
}
