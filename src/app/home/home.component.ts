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
  constructor(private data: CharactersService) { }

  ngOnInit() {
    //this.getpeople();
    this.filterPeople(this.searchText);
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
  filterPeople(searchText){
    this.data.getFilteredPeople(searchText)
    .subscribe(
      res => {
        this.success = true;
        console.log(res);
        this.characters = res;
        this.filteredChars = this.characters.results;
      },
      err => console.log(err)
    );
  }
  drop(event: CdkDragDrop<Character[]>) {
    moveItemInArray(this.filteredChars, event.previousIndex, event.currentIndex);
  }
}
