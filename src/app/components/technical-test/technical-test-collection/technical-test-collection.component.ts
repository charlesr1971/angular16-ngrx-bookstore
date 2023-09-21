import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { TechnicalTest } from '../../../app.model';

@Component({
  selector: 'app-technical-test-collection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './technical-test-collection.component.html',
})
export class TechnicalTestCollectionComponent {
  @Input() technicalTests: ReadonlyArray<TechnicalTest> = [];
  @Output() remove = new EventEmitter<string>();
}
