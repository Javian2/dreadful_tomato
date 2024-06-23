import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getMovies()', () => {
    const res = {
      total: 60,
      entries: [
        {
          "title": "American History X",
          "description": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
          "programType": "movies",
          "images": {
              "posterArt": {
                  "url": "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/american_history_x.jpg",
                  "width": 497,
                  "height": 736
              }
          },
          "releaseYear": 1998
        },
        {
          "title": "Catch Me If You Can",
          "description": "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
          "programType": "movies",
          "images": {
              "posterArt": {
                  "url": "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/catch_me_if_you_can.jpg",
                  "width": 485,
                  "height": 719
              }
          },
          "releaseYear": 2002
        },
      ]
    }
    const filteredRes = res.entries.filter(entry => entry.programType === 'movies');
    const url = 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';
  
    // Realiza una solicitud GET simulada
    service.getMovies().subscribe((data) => {
      expect(data).toEqual(filteredRes);
    });
  
    const httpRequest = httpMock.expectOne(url);
    expect(httpRequest.request.method).toBe('GET');
  
    // Simula la respuesta del servidor
    httpRequest.flush(res);
  });

  it('should test getSeries()', () => { 
    const res = {
      total: 60, 
      entries: [
        {
          "title": "Breaking Bad",
          "description": "Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.",
          "programType": "series",
          "images": {
              "posterArt": {
                  "url": "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/breaking_bad.jpeg",
                  "width": 680,
                  "height": 1000
              }
          },
          "releaseYear": 2008
        },
        {
          "title": "Person of Interest",
          "description": "You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.",
          "programType": "series",
          "images": {
              "posterArt": {
                  "url": "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/person_of_interest.jpeg",
                  "width": 1300,
                  "height": 1733
              }
          },
          "releaseYear": 2011
        },
      ]
    }
  
    const filteredRes = res.entries.filter(entry => entry.programType === 'series');
    const url = 'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';
  
    // Realiza una solicitud GET simulada
    service.getSeries().subscribe((data) => {
      expect(data).toEqual(filteredRes);
    });
  
    const httpRequest = httpMock.expectOne(url);
    expect(httpRequest.request.method).toBe('GET');
  
    // Simula la respuesta del servidor
    httpRequest.flush(res);
  })

  
});

