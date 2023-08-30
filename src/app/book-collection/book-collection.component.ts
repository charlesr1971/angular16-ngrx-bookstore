import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../app.model';

@Component({
  selector: 'app-book-collection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './book-collection.component.html',
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
