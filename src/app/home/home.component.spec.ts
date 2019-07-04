import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';

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

  it('contains the search text', ()=>{
    for (let character of component.filteredChars) {
      expect(character.name).toBe(component.searchText);
    }  
  });

});
