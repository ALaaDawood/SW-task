import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /* a test that ensures we have a search box and it has the same value
    of the displayed cards
  */
  it('should Have a search box with the search text', ()=>{
    expect(de.query(By.css('#search-box')).nativeElement.innerText).toBe(component.searchText);
  });
  /* a test that ensures the displayed cards are in fact the correct search results
  */
  it('the results contain the search text', ()=>{
    for (let character of component.filteredChars) {
      expect(character.name).toContain(component.searchText);
    }  
  });

  // it('should succeed', fakeAsync(()=> {
  //   expect(component.success).toBe(false);
  //   component.filterPeople(component.searchText);
  //   tick();
  //   expect(component.success).toBe(true);
  // }));

  it('has name', ()=> {
    for (let character of component.filteredChars) {
        expect(character.name).toBeTruthy();
    }
  });  

  it('has url', ()=> {
    for (let character of component.filteredChars) {
        expect(character.url).toBeTruthy();
    }
  });

  it('has height', ()=> {
    for (let character of component.filteredChars) {
        expect(character.height).toBeTruthy();
    }  
  });

  it('has homeworld', ()=> {
    for (let character of component.filteredChars) {
        expect(character.homeworld).toBeTruthy();
    }  
  });
});
