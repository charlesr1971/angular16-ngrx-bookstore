import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TechnicalTest } from '../../app.model';

@Injectable({ providedIn: 'root' })
export class TechnicalTestsService {
  constructor(private http: HttpClient) {}

  getTechnicalTests(title: string): Observable<Array<TechnicalTest>> {
    const params = {
      maxResults: 5,
      orderBy: 'relevance',
      q: title,
    };
    return this.http
      .get<{ items: TechnicalTest[] }>('https://www.googleapis.com/books/v1/volumes', {
        params,
      })
      .pipe(map((technicalTests) => technicalTests.items || []));
  }
}
