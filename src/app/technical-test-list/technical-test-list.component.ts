import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { TechnicalTest } from '../app.model';

@Component({
  selector: 'app-technical-test-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './technical-test-list.component.html',
})
export class TechnicalTestListComponent {
  @Input() technicalTests: ReadonlyArray<TechnicalTest> = [];
  @Output() add = new EventEmitter<string>();
}
