import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../app.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(title: string): Observable<Array<Book>> {
    const params = {
      maxResults: 5,
      orderBy: 'relevance',
      q: title,
    };
    return this.http
      .get<{ items: Book[] }>('https://www.googleapis.com/books/v1/volumes', {
        params,
      })
      .pipe(map((books) => books.items || []));
  }
}
