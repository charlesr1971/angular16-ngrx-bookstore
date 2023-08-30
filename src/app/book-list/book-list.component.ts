import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../app.model';

@Component({
  selector: 'app-book-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
