import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service'
import { Character } from './character.model'
import { CdkDragDrop, moveItemInArray  } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters = null ;
  filteredChars: Character[] = [];
  searchText: string = '';
  success: boolean = false;
  first: boolean = true;

  constructor(private data: CharactersService) { }

  ngOnInit() {
    //this.getpeople();
    //this.filterPeople(this.searchText);
  }
  // getpeople(){
  //   this.data.getAllPeople()
  //   .subscribe(
  //     res => {
  //       console.log(res)
  //       this.success = true;
  //       this.characters = res;
  //       this.filterPeople(this.searchText);
  //     },
  //     err => console.log(err)
  //   );
  // }
  // filterPeople(searchText){
  //   this.filteredChars = this.characters.results.filter((item) => {
  //     return item.name.toLowerCase().includes(searchText.toLowerCase());
  //   });
  // }
  /*******************************************************************************/
  //gets the response from the service and assign them to the -filteredChars- array for display
  //also changes the value of success to true to allow the html elements to render
  filterPeople(searchText:string){
    this.data.getFilteredPeople(searchText)
    .subscribe(
      res => {
        this.success = !this.success;
        this.first = false;
        console.log(res);
        this.characters = res;
        this.filteredChars = this.characters.results;
      },
      err => console.log(err)
    );
  }
/*******************************************************************************/
//handles the drag and drop of the cards
  drop(event: CdkDragDrop<Character[]>) {
    moveItemInArray(this.filteredChars, event.previousIndex, event.currentIndex);
  }
}





