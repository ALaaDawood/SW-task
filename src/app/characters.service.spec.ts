import { TestBed } from '@angular/core/testing';
import { CharactersService } from './characters.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CharactersService', () => {
  let charactersService: CharactersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [CharactersService]
    });
    charactersService = TestBed.get(CharactersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(charactersService).toBeTruthy();
  });

  it('should has getfilteredPeople function', () => {
    expect(charactersService.getFilteredPeople).toBeTruthy();
   });


  it('getFilteredPeople() should GET people', () => {

    const people = {};

    charactersService.getFilteredPeople("r").subscribe((res) => {
      expect(res).toEqual(people);
    });
    const req = httpMock.expectOne(`https://swapi.co/api/people/?search=r`);
    expect(req.request.method).toEqual("GET");
    req.flush(people);
    httpMock.verify();
  });

});

